import { projects } from "@/data/content";
import { EntryBlock, PageHeader } from "@/app/components/ui";

export default function Projects() {
  return (
    <>
      <PageHeader
        title="Projects"
        intro="Selected engineering and applied machine learning projects spanning retrieval systems, geospatial modeling, and full-stack AI deployment."
      />
      <div className="space-y-6">
        {projects.map((p) => (
          <div key={p.title} className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 md:p-8">
            <EntryBlock entry={p} />
          </div>
        ))}
      </div>
    </>
  );
}
