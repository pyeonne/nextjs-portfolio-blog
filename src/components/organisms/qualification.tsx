import Image from "next/image";
import SectionSubtitle from "../atoms/section_subtitle";
import SectionTitle from "../atoms/section_title";
import QualificationContent from "../molecules/qualification_content";

const education = [
  {
    name: "SW Engineer Track",
    country: "elice",
    year: "2021 - 2022",
  },
  {
    name: "Japanese Language And Literature",
    country: "Daegu Catholic University",
    year: "2012 - 2018",
  },
];

const experience = [
  {
    name: "Frontend Developer",
    country: "PLIKA - Seoul",
    year: "2022 -",
  },
];

export default function Qualification() {
  return (
    <section id="qualification" className="section relative">
      <SectionTitle title="Qualification" />
      <SectionSubtitle subtitle="Experience & education" />
      <div
        id="qualification__container"
        className="section__border container grid gap-y-14"
      >
        <QualificationContent type="education" qualifications={education} />
        <QualificationContent type="experience" qualifications={experience} />
      </div>
      <Image
        width={150}
        height={150}
        src="/images/shape_circle.svg"
        alt="qualification image"
        id="qualification__img"
        className="absolute -right-12 bottom-48 rotate-15 opacity-10"
      />
    </section>
  );
}
