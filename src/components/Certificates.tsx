import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";

type Certificate = {
  title: string;
  issuer: string;
  date?: string;
  achievement: string;
  id?: string;
};

const certificates: Certificate[] = [
  {
    title: "TCS CodeVita Season 13",
    issuer: "TCS",
    achievement: "Secured a global rank of 12583, showcasing exceptional coding skills",
  },
  {
    title: "Introduction to Career Skills in Data Analytics",
    issuer: "LinkedIn Learning",
    date: "Sep 18, 2023",
    achievement: "Completed course covering Data Analytics and Tech Career Skills",
  },
  {
    title: "Front End Development - HTML",
    issuer: "Great Learning Academy",
    date: "Sep 2023",
    achievement: "Successfully completed the free online course on HTML",
  },
  {
    title: "Front End Development - CSS",
    issuer: "Great Learning Academy",
    date: "Sep 2023",
    achievement: "Successfully completed the free online course on CSS",
  },
  {
    title: "Introduction to JavaScript",
    issuer: "Great Learning Academy",
    date: "Sep 2023",
    achievement: "Successfully completed the free online course on JavaScript",
  },
  {
    title: "Data Structures in C",
    issuer: "Great Learning Academy",
    date: "Sep 2023",
    achievement: "Successfully completed the free online course on Data Structures in C",
  },
  {
    title: "Backend Web Development using Express and Node.js",
    issuer: "DevTown",
    date: "Sep 2023",
    achievement: "Completed 7-days FREE Bootcamp on Backend Web Development",
  },
  {
    title: "JavaScript & React.Js",
    issuer: "DevTown",
    date: "Oct 2023",
    achievement: "Completed 7-days FREE Bootcamp on JavaScript & React.Js",
  },
  {
    title: "Python and Artificial Intelligence",
    issuer: "DevTown",
    date: "Oct 2023",
    achievement: "Completed 7-days FREE Bootcamp on Python and AI",
  },
  {
    title: "Create Flipkart clone using HTML, CSS & JavaScript",
    issuer: "DevTown",
    date: "Oct 16, 2023",
    achievement: "Completed 7-days FREE Bootcamp on building a Flipkart clone",
  },
  {
    title: "Community Support Appreciation",
    issuer: "DevTown",
    date: "Oct 06, 2023",
    achievement: "Received in grateful recognition of continuing support to help grow the community",
  },
  {
    title: "EY Techathon 4.0",
    issuer: "EY (Ernst & Young)",
    achievement: "Participated in Round 1: Executive Summary Submission",
  },
  {
    title: "Call for HR Articles for Impressions",
    issuer: "IIM Rohtak",
    date: "Oct 2023",
    achievement: "Participated in the call for HR articles organized by IIM Rohtak",
  },
  {
    title: "Campus Ambassador - 7 Lakes Fest",
    issuer: "IIM Calcutta",
    date: "2023",
    achievement: "Recognized for outstanding performance as a Campus Ambassador during the IIM Calcutta Fest",
  },
  {
    title: "InfiniFrame Photography Competition",
    issuer: "IIM Calcutta",
    date: "2023",
    achievement: "Participated in the InfiniFrame competition of 7 Lakes Fest 2023",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Award className="h-5 w-5" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-white">Certificates</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <Card key={index} className="bg-white/[0.03] border-white/10 text-white hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-primary">{cert.title}</CardTitle>
              <CardDescription className="text-white/60">{cert.issuer}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-white/80 leading-relaxed">
                {cert.achievement}
              </p>
              {cert.date && (
                <p className="mt-4 text-xs text-white/40">{cert.date}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
