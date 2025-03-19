import ContactForm from "@/features/contact/components/ContactForm";
import Projects from "@/features/projects/projects";
import WorkExperience from "../../jobs/components/WorkExperience";
import { FavSkills } from "../../skills/components/FavSkills";
import SkillsTabs from "../../skills/components/SkillsTabs";
import HomePageHero from "./HomePageHero";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-screen-lg">
      <main className="flex size-full grow flex-col gap-16 p-4 pb-32">
        <HomePageHero />
        {/* <Education /> */}
        <FavSkills />

        <WorkExperience />
        <Projects />
        <SkillsTabs />
        <ContactForm />
        {/* Footer with copyright */}

        <footer className="flex flex-col items-center justify-center gap-2 text-muted-foreground md:flex-row md:gap-6">
          <p>Design and developed by Charles Russell.</p>
          <p>&copy; {new Date().getFullYear()} - All rights reserved</p>
        </footer>
      </main>
    </div>
  );
}
