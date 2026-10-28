import { industry } from "@/data/content";
import { EntryList, PageHeader } from "@/app/components/ui";

export default function IndustryExperience() {
  return (
    <>
      <PageHeader
        title="Industry Experience"
        intro="My industry work focuses on large-scale machine learning systems, geospatial modeling, and production-ready AI experimentation."
      />
      <EntryList entries={industry} />
    </>
  );
}
