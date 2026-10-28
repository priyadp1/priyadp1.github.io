import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Name */}
        <Link
          href="/"
          className="text-lg font-semibold text-white tracking-tight hover:opacity-80 transition-opacity"
        >
          Prisha Priyadarshini
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm text-gray-400">

          <Link href="/research" className="hover:text-white transition-colors">
            Research
          </Link>

          <Link href="/publications" className="hover:text-white transition-colors">
            Publications
          </Link>

          <Link href="/industry" className="hover:text-white transition-colors">
            Industry
          </Link>
        
          <Link href="/projects" className="hover:text-white transition-colors">
            Projects
          </Link>

          {/* New Skills Link */}
          <Link href="/skills" className="hover:text-white transition-colors">
            Skills
          </Link>
          <Link href="/extracurriculars" className="hover:text-white transition-colors">
            Extracurriculars
          </Link>

          <div className="h-4 w-px bg-gray-700" />

          <a
            href="/Prisha_Priyadarshini_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            CV
          </a>

          <a
            href="https://github.com/priyadp1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/prisha-priyadarshini-ba0519267/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>

        </div>
      </div>
    </nav>
  );
}
