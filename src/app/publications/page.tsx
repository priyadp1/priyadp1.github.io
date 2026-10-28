import { publications } from "@/data/content";
import { EntryBlock, PageHeader } from "@/app/components/ui";

export default function Publications() {
  return (
    <>
      <PageHeader
        title="Publications"
        intro="Peer-reviewed research contributions in multimodal reasoning, large language models, and instructional video understanding."
      />
      <div className="space-y-6">
        {publications.map((p) => (
          <div key={p.title} className="rounded-2xl border border-zinc-800/80 bg-zinc-900/40 p-6 md:p-8">
            <EntryBlock entry={p} />
          </div>
        ))}
      </div>
    </>
  );
}
