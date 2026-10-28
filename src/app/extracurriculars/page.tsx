import { extracurriculars } from "@/data/content";
import { EntryList, PageHeader } from "@/app/components/ui";

export default function Extracurriculars() {
  return (
    <>
      <PageHeader
        title="Extracurriculars"
        intro="My extracurricular work spans academic service, technical mentorship, leadership, and collegiate athletics."
      />
      <EntryList entries={extracurriculars} />
    </>
  );
}
