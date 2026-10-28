"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { siteConfig } from "@/config/site";

const pages = [
  { href: "/research", label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/industry", label: "Industry" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/extracurriculars", label: "Extracurriculars" },
];

const external = [
  { href: siteConfig.links.cv, label: "CV" },
  { href: siteConfig.links.github, label: "GitHub" },
  { href: siteConfig.links.linkedin, label: "LinkedIn" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const pageClass = (href: string) =>
    pathname === href ? "text-white" : "text-zinc-400 hover:text-white";

  return (
    <nav className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="font-serif text-lg text-white hover:opacity-80"
        >
          Prisha Priyadarshini
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-6 text-sm lg:flex">
          {pages.map((p) => (
            <Link key={p.href} href={p.href} className={pageClass(p.href)}>
              {p.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-zinc-800" />
          {external.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-sky-300"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="-mr-2 rounded-md p-2 text-zinc-400 hover:text-white lg:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-zinc-800/80 px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col">
            {pages.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                onClick={() => setOpen(false)}
                className={`py-2.5 ${pageClass(p.href)}`}
              >
                {p.label}
              </Link>
            ))}
          </div>
          <div className="mt-3 flex gap-6 border-t border-zinc-800/80 pt-4 text-sm">
            {external.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-sky-300"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
