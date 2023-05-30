import Image from "next/image";
import { Skill } from "./skills_info";

type Props = {
  skill: Skill;
};

export default function SkillsData({
  skill: { image, name, subtitle },
}: Props) {
  return (
    <div id="skills__data" className="grid justify-center text-center">
      <div
        id="skills__blob"
        className="group mb-4 grid h-[100px] w-[80px] place-items-center rounded-[3rem] bg-container"
      >
        <Image
          className="h-auto w-[40px] group-hover:animate-bounce-skills"
          src={image}
          width={40}
          height={100}
          alt="skills image"
        />
      </div>
      <h3 id="skills__name" className="mb-1 text-small">
        {name}
      </h3>
      <span
        id="skills__subtitle"
        className="text-tiny text-[var(--text-color-light)]"
      >
        {subtitle}
      </span>
    </div>
  );
}
