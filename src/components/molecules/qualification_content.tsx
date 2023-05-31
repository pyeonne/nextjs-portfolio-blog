import BuildingIcon from "../atoms/icons/building_icon";
import PencilRulerIcon from "../atoms/icons/pencil_ruler_icon";
import QualificationInfo, { Qualification } from "./qualification_info";

type Props = {
  type: "education" | "experience";
  qualifications: Qualification[];
};

const title = {
  education: {
    icon: <PencilRulerIcon size={16} />,
    text: "Education",
  },
  experience: {
    icon: <BuildingIcon size={16} />,
    text: "Experience",
  },
};

export default function QualificationContent({ type, qualifications }: Props) {
  return (
    <div id="qualification__content">
      <h3
        id="qualification__title"
        className="mb-8 flex items-center justify-center gap-x-2 text-small font-semibold"
      >
        {title[type].icon} {title[type].text}
      </h3>
      <QualificationInfo qualifications={qualifications} />
    </div>
  );
}
