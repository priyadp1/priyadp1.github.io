import type { ReactNode } from "react";
import type { Entry } from "@/data/content";

export function PageHeader({ title, intro }: { title: string; intro?: ReactNode }) {
  return (
    <header className="mb-16 space-y-4 border-b border-zinc-800/80 pb-10">
      <h1 className="font-serif text-4xl text-white md:text-5xl">{title}</h1>
      {intro && <p className="max-w-2xl text-lg leading-relaxed text-zinc-400">{intro}</p>}
    </header>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return <h2 className="mb-8 font-serif text-2xl text-white">{children}</h2>;
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}

export function Bullets({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5 leading-relaxed text-zinc-400">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-5 before:absolute before:left-0 before:top-[0.65em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-zinc-700"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** One role, project or paper: date in a left column (when present), details on the right. */
export function EntryBlock({ entry }: { entry: Entry }) {
  return (
    <article className={entry.date ? "grid gap-x-10 gap-y-2 md:grid-cols-[10.5rem_1fr]" : ""}>
      {entry.date && <p className="pt-1 whitespace-nowrap text-sm text-zinc-500 tabular-nums">{entry.date}</p>}

      <div className="space-y-4">
        <header className="space-y-1">
          <h2 className="text-xl font-semibold text-white">{entry.title}</h2>
          {entry.org && <p className="text-sky-300/90">{entry.org}</p>}
          {entry.focus && <p className="text-sm italic text-zinc-500">{entry.focus}</p>}
        </header>

        {entry.tags && (
          <div className="flex flex-wrap gap-2">
            {entry.tags.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        )}

        {entry.summary && <p className="leading-relaxed text-zinc-400">{entry.summary}</p>}
        {entry.bullets && <Bullets items={entry.bullets} />}

        {entry.projects?.map((p) => (
          <div key={p.title} className="space-y-3 border-l border-zinc-800 pl-5 pt-1">
            <h3 className="font-medium text-zinc-100">{p.title}</h3>
            <Bullets items={p.bullets} />
          </div>
        ))}

        {entry.links && (
          <div className="flex flex-wrap gap-5 pt-1 text-sm">
            {entry.links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-300 underline decoration-sky-300/30 underline-offset-4 hover:decoration-sky-300"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function EntryList({ entries }: { entries: Entry[] }) {
  return (
    <div className="space-y-14">
      {entries.map((e, i) => (
        <EntryBlock key={i} entry={e} />
      ))}
    </div>
  );
}
