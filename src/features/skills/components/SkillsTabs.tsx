import { HoverEffect } from "@/components/CardHover";
import { Tabs } from "@/features/skills/components/Tabs";
import { skills as skillsObject } from "@/lib/content/skills";

export default function SkillsTabs() {
  const skills = Object.values(skillsObject);
  const skillCategories = Array.from(
    new Set(skills.map((skill) => skill.category.name).flat()),
  );

  const tabs = skillCategories.map((category) => {
    const categorySkills = skills.filter(
      (skill) => skill.category.name === category,
    );
    const subCategories = Array.from(
      new Set(categorySkills.map((skill) => skill.category.subCategory).flat()),
    );
    const groups = subCategories.map((subCategory) => {
      return {
        title: subCategory,
        items: categorySkills
          .filter((skill) => skill.category.subCategory === subCategory)
          .map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="flex size-full grow gap-2 rounded-2xl bg-card p-4"
              >
                <div className="mt-1 size-fit">
                  <Icon className="text-5xl" />
                </div>
                <div>
                  <h3>{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {skill.description}
                  </p>
                </div>
              </div>
            );
          }),
      };
    });
    return {
      title: category,
      value: category,
      content: <HoverEffect groups={groups} />,
    };
  });
  return (
    <section className="flex h-[58rem] flex-col gap-4">
      <Tabs tabs={tabs} />
    </section>
  );
}
