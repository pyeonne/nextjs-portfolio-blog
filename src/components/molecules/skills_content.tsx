import BracesIcon from "../atoms/icons/braces_icon";
import PantoneIcon from "../atoms/icons/pantone_icon";
import SkillsInfo, { Skill } from "./skills_info";

type Props = {
  type: "developer" | "designer";
  skills: Skill[];
};

const title = {
  developer: {
    icon: <BracesIcon size={16} />,
    text: "Frontend Developer",
  },
  designer: {
    icon: <PantoneIcon size={16} />,
    text: "Web Designer",
  },
};

export default function SkillsContent({ type, skills }: Props) {
  return (
    <div id="skills__content">
      <h3
        id="skills__title"
        className="mb-10 flex items-center justify-center gap-x-2 text-small font-semibold"
      >
        {title[type].icon} {title[type].text}
      </h3>
      <SkillsInfo skills={skills} />
    </div>
  );
}
