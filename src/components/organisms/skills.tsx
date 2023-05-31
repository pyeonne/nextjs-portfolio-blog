import SectionSubtitle from "../atoms/section_subtitle";
import SectionTitle from "../atoms/section_title";
import SkillsContent from "../molecules/skills_content";

const developer = [
  {
    image: "/images/html_logo.svg",
    name: "HTML",
    subtitle: "Intermediate",
  },
  {
    image: "/images/css_logo.svg",
    name: "CSS",
    subtitle: "Advanced",
  },
  {
    image: "/images/javascript_logo.svg",
    name: "JavaScript",
    subtitle: "Intermediate",
  },
  {
    image: "/images/react_logo.svg",
    name: "React",
    subtitle: "Intermediate",
  },
  {
    image: "/images/git_logo.svg",
    name: "Git",
    subtitle: "Intermediate",
  },
];

const designer = [
  {
    image: "/images/figma_logo.svg",
    name: "Figma",
    subtitle: "Basic",
  },
  {
    image: "/images/sketch_logo.svg",
    name: "Sketch",
    subtitle: "Basic",
  },
  {
    image: "/images/xd_logo.svg",
    name: "Adobe XD",
    subtitle: "Basic",
  },
  {
    image: "/images/invision_logo.svg",
    name: "InVisionApp",
    subtitle: "Basic",
  },
  {
    image: "/images/photoshop_logo.svg",
    name: "Photoshop",
    subtitle: "Basic",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle title="Skills" />
      <SectionSubtitle subtitle="My favorite skills" />
      <div
        id="skills__container"
        className="section__border container grid gap-y-14"
      >
        <SkillsContent type="developer" skills={developer} />
        <SkillsContent type="designer" skills={designer} />
      </div>
    </section>
  );
}
