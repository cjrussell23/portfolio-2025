import { Skill, skills } from "@/lib/content/skills";

import { Text, View } from "@react-pdf/renderer";

import { ResumeSection } from "./ResumeSection";

export function ResumeSkills() {
  return (
    <ResumeSection title="Skills" href="https://chjrussell.com/skills">
      <View style={{ flexDirection: "column", gap: 5, paddingTop: 10 }}>
        {Array.from(
          new Set(
            Object.values(skills)
              .map((skill) => skill.category.name)
              .flat(),
          ),
        ).map((category) => (
          <SkillCategory
            key={category}
            category={category}
            skills={Object.values(skills).filter(
              (skill) => skill.category.name === category,
            )}
          />
        ))}
      </View>
    </ResumeSection>
  );
}

function SkillCategory(props: { category: string; skills: Skill[] }) {
  const { skills, category } = props;
  return (
    <View style={{ flexDirection: "row", gap: 2 }}>
      <Text
        style={{ fontFamily: "Lato Bold", fontWeight: "bold", fontSize: 10 }}
      >
        {category} :
      </Text>
      <Text style={{ fontSize: 10, fontFamily: "Lato" }}>
        {skills.map((skill) => skill.name).join(", ")}
      </Text>
    </View>
  );
}
