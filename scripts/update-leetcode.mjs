import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const leetcodeUsername = process.env.LEETCODE_USERNAME || "sarvesh8882589477";

const query = `
query userProfile($username: String!) {
  matchedUser(username: $username) {
    username
    profile {
      realName
      ranking
      userAvatar
      aboutMe
      school
      countryName
    }
    submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }
    badges {
      displayName
      creationDate
    }
    languageProblemCount {
      languageName
      problemsSolved
    }
    tagProblemCounts {
      advanced {
        tagName
        problemsSolved
      }
      intermediate {
        tagName
        problemsSolved
      }
      fundamental {
        tagName
        problemsSolved
      }
    }
  }
}
`;

const response = await fetch("https://leetcode.com/graphql/", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    accept: "application/json",
  },
  body: JSON.stringify({
    query,
    variables: { username: leetcodeUsername },
  }),
});

if (!response.ok) {
  throw new Error(`LeetCode request failed with status ${response.status}`);
}

const payload = await response.json();

if (payload.errors?.length) {
  const messages = payload.errors.map((error) => error.message).join("; ");
  throw new Error(`LeetCode returned errors: ${messages}`);
}

const user = payload.data?.matchedUser;

if (!user) {
  throw new Error(`LeetCode user "${leetcodeUsername}" was not found.`);
}

const submissionStats = user.submitStatsGlobal?.acSubmissionNum ?? [];
const allDifficulty = submissionStats.find((item) => item.difficulty === "All") ?? {
  count: 0,
  submissions: 0,
};
const easyDifficulty = submissionStats.find((item) => item.difficulty === "Easy") ?? { count: 0 };
const mediumDifficulty = submissionStats.find((item) => item.difficulty === "Medium") ?? { count: 0 };
const hardDifficulty = submissionStats.find((item) => item.difficulty === "Hard") ?? { count: 0 };

const languages = [...(user.languageProblemCount ?? [])]
  .filter((item) => item.problemsSolved > 0)
  .sort((a, b) => b.problemsSolved - a.problemsSolved)
  .slice(0, 4)
  .map((item) => ({
    name: item.languageName,
    solved: item.problemsSolved,
  }));

const strongTopics = [
  ...(user.tagProblemCounts?.advanced ?? []),
  ...(user.tagProblemCounts?.intermediate ?? []),
  ...(user.tagProblemCounts?.fundamental ?? []),
]
  .filter((item) => item.problemsSolved > 0)
  .sort((a, b) => b.problemsSolved - a.problemsSolved)
  .slice(0, 5)
  .map((item) => ({
    name: item.tagName,
    solved: item.problemsSolved,
  }));

const badges = [...(user.badges ?? [])].sort((a, b) => {
  const aDate = Number(a.creationDate ?? 0);
  const bDate = Number(b.creationDate ?? 0);
  return bDate - aDate;
});

const now = new Date();
const snapshot = {
  username: user.username,
  name: user.profile?.realName?.trim() || user.username,
  ranking: new Intl.NumberFormat("en-US").format(user.profile?.ranking ?? 0),
  solved: allDifficulty.count ?? 0,
  totalSubmissions: allDifficulty.submissions ?? 0,
  easy: easyDifficulty.count ?? 0,
  medium: mediumDifficulty.count ?? 0,
  hard: hardDifficulty.count ?? 0,
  totalBadges: badges.length,
  currentBadge: badges[0]?.displayName ?? "No badge yet",
  avatar: user.profile?.userAvatar ?? "",
  about: user.profile?.aboutMe?.trim() || "LeetCode profile",
  school: user.profile?.school?.trim() || "",
  country: user.profile?.countryName?.trim() || "",
  languages,
  strongTopics,
  lastSyncedIso: now.toISOString(),
  lastSyncedLabel: `Auto-synced from LeetCode - ${new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(now)} UTC`,
};

const fileContent = `// AUTO-GENERATED FILE. DO NOT EDIT MANUALLY.
// Run \`npm run update:leetcode\` to refresh this snapshot.

export type LeetCodeLanguage = {
  name: string;
  solved: number;
};

export type LeetCodeTopic = {
  name: string;
  solved: number;
};

export type LeetCodeSnapshot = {
  username: string;
  name: string;
  ranking: string;
  solved: number;
  totalSubmissions: number;
  easy: number;
  medium: number;
  hard: number;
  totalBadges: number;
  currentBadge: string;
  avatar: string;
  about: string;
  school: string;
  country: string;
  languages: LeetCodeLanguage[];
  strongTopics: LeetCodeTopic[];
  lastSyncedIso: string;
  lastSyncedLabel: string;
};

export const leetcodeSnapshot: LeetCodeSnapshot = ${JSON.stringify(snapshot, null, 2)};
`;

const outputPath = path.join(process.cwd(), "src", "data", "leetcode-snapshot.ts");
await mkdir(path.dirname(outputPath), { recursive: true });
await writeFile(outputPath, fileContent, "utf8");

console.log(`LeetCode snapshot updated for ${leetcodeUsername}`);
