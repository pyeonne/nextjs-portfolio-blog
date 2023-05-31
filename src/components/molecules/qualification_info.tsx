import QualificationData from "./qualification_data";

export type Qualification = {
  name: string;
  country: string;
  year: string;
};

type Props = {
  qualifications: Qualification[];
};

export default function QualificationInfo({ qualifications }: Props) {
  return (
    <div id="qualification__info" className="grid gap-y-8">
      {qualifications.map((qualification) => (
        <QualificationData key={qualification.name} data={qualification} />
      ))}
    </div>
  );
}
