import Image from "next/image";
import { siteConfig } from "@/config/site";
import { certifications, coursework, experience } from "@/data/content";
import { SectionTitle, Tag } from "@/app/components/ui";

const button =
  "inline-flex items-center rounded-full border px-4 py-2 text-sm transition-colors";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="space-y-8">
        <div className="flex flex-col-reverse gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-4">
            <h1 className="font-serif text-4xl text-white sm:text-5xl md:text-6xl">Prisha Priyadarshini</h1>
            <p className="text-lg text-zinc-400">
              AI/ML Researcher & Engineer
              <span className="mx-2 text-zinc-700">/</span>
              Computer Science & Mathematics
              <span className="mx-2 text-zinc-700">/</span>
              Rutgers University–New Brunswick
            </p>
          </div>
          <Image
            src="/profile.jpg"
            alt="Prisha Priyadarshini"
            width={320}
            height={320}
            priority
            className="h-32 w-32 shrink-0 rounded-full object-cover ring-1 ring-zinc-800 sm:h-40 sm:w-40"
          />
        </div>

        <div className="max-w-3xl space-y-4 text-lg leading-relaxed text-zinc-300">
          <p>
          <p className="text-zinc-400">
  I investigate{" "}
  <span className="text-white">
    why AI systems behave the way they do
  </span>
  , focusing on{" "}
  <span className="text-white">
    multi-agent consensus formation
  </span>
  ,{" "}
  <span className="text-white">Rashomon sets</span>, and{" "}
  <span className="text-white">
    interpretable machine learning
  </span>
  . My research examines how interactions between models
  shape collective decisions and why equally accurate
  models can arrive at different decisions.
</p>

<p className="text-zinc-400">
  My work spans LLM deliberation dynamics, model
  multiplicity, decision tree interpretability, and
  multimodal learning. Through empirical experimentation
  and algorithmic analysis, I aim to uncover the
  mechanisms underlying AI behavior and advance more
  reliable and interpretable AI systems.
</p>
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {certifications.map((c) => (
            <Tag key={c}>{c}</Tag>
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href={`mailto:${siteConfig.email}`}
            className={`${button} border-sky-300 bg-sky-300 font-medium text-zinc-950 hover:bg-sky-200`}
          >
            Email me
          </a>
          {[
            { label: "CV", href: siteConfig.links.cv },
            { label: "GitHub", href: siteConfig.links.github },
            { label: "LinkedIn", href: siteConfig.links.linkedin },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${button} border-zinc-700 text-zinc-200 hover:border-zinc-500 hover:text-white`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section>
        <SectionTitle>Research & Industry Experience</SectionTitle>
        <ol className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
          {experience.map((e, i) => (
            <li key={i} className="grid gap-x-10 gap-y-1 py-6 md:grid-cols-[10.5rem_1fr]">
              <p className="pt-0.5 whitespace-nowrap text-sm text-zinc-500 tabular-nums">{e.date}</p>
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-semibold text-white">{e.role}</h3>
                  <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-[11px] uppercase tracking-wider text-zinc-500">
                    {e.kind}
                  </span>
                </div>
                <p className="text-sm text-sky-300/90">{e.org}</p>
                {e.focus && <p className="text-sm italic text-zinc-500">{e.focus}</p>}
                {e.note && <p className="text-sm text-zinc-400">{e.note}</p>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* Coursework */}
      <section>
        <SectionTitle>Selected Coursework</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          {coursework.map((c) => (
            <div key={c.area} className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
              <h3 className="mb-3 font-medium text-white">{c.area}</h3>
              <ul className="space-y-1.5 text-sm text-zinc-400">
                {c.courses.map((course) => (
                  <li key={course}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-8 md:p-10">
        <h2 className="mb-3 font-serif text-2xl text-white">Contact Me</h2>
        <p className="max-w-2xl leading-relaxed text-zinc-400">
          I&apos;m always open to discussing research ideas, industry opportunities, or potential
          collaborations. Feel free to reach out via email at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sky-300 underline decoration-sky-300/30 underline-offset-4 hover:decoration-sky-300"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
