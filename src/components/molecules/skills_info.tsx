import SkillsData from "./skills_data";

export type Skill = {
  image: string;
  name: string;
  subtitle: string;
};

type Props = {
  skills: Skill[];
};

export default function SkillsInfo({ skills }: Props) {
  return (
    <div id="skills__info" className="grid grid-cols-3 gap-x-8 gap-y-9">
      {skills.map((skill) => (
        <SkillsData key={skill.name} skill={skill} />
      ))}
    </div>
  );
}
