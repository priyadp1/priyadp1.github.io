import { research } from "@/data/content";
import { EntryList, PageHeader } from "@/app/components/ui";

export default function Research() {
  return (
    <>
      <PageHeader
        title="Research"
        intro="My research focuses on multi-agent reasoning systems, multimodal ML, interpretable ML, and large-scale experimental evaluation across real-world datasets. I have not only contributed to research projects in these areas, but also designed and executed large-scale experiments, built reproducible pipelines, and led research teams."
      />
      <EntryList entries={research} />
    </>
  );
}
