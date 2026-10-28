import { skills } from "@/data/content";
import { PageHeader, Tag } from "@/app/components/ui";

export default function Skills() {
  return (
    <>
      <PageHeader title="Technical Skills" />
      <div className="grid gap-4 md:grid-cols-2">
        {skills.map((group) => (
          <div key={group.area} className="rounded-xl border border-zinc-800/80 bg-zinc-900/40 p-6">
            <h2 className="mb-4 font-medium text-white">{group.area}</h2>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
