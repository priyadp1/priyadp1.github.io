import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800/80">
      <div className="mx-auto flex max-w-4xl flex-col gap-3 px-6 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <div>
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>

        <div className="flex gap-5">
          <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
            Email
          </a>
          <a href={siteConfig.links.github} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            GitHub
          </a>
          <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
