import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-4 text-white">
      <div className="w-full max-w-xl rounded-[32px] border border-white/6 bg-[#111111] p-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
        <p className="text-sm uppercase tracking-[0.28em] text-primary">404</p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">Page not found</h1>
        <p className="mt-4 text-base leading-8 text-white/58">
          The page you tried to open does not exist in this portfolio.
        </p>
        <a
          href="/"
          className="mt-6 inline-flex rounded-2xl bg-primary px-5 py-3 font-medium text-black transition hover:bg-primary/90"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
