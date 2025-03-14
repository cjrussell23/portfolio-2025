"use client";
import { HoverEffect } from "@/components/CardHover";
import { skills } from "@/lib/content/skills";

export function FavSkills() {
  return (
    <section className="flex flex-col gap-4">
      <div>
        <h2>Preferred Stack</h2>
        <p className="text-muted-foreground">
          {`These are my preferred tools for building fast, scalable applications with a great developer and user experience. I'm always looking to learn new technologies and improve my skills.`}
          <a href="#skills" className="text-foreground">
            {" "}
            Click here
          </a>
          {` to learn more about the technologies and tools I use.`}
        </p>
      </div>
      <HoverEffect
        containerClassName="grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
        groups={[
          {
            items: Object.values(skills)
              .filter((skill) => skill.favoutite)
              .map((skill) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.name}
                    className="flex grow items-center gap-2 rounded-2xl bg-card px-4 py-3"
                  >
                    <div className="mt-1 size-fit">
                      <Icon className="text-3xl" />
                    </div>
                    <div>
                      <h3>{skill.name}</h3>
                    </div>
                  </div>
                );
              }),
            title: undefined,
          },
        ]}
      />
    </section>
  );
}
