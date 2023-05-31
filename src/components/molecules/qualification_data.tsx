import { Qualification } from "./qualification_info";

type Props = {
  data: Qualification;
};

export default function QualificationData({
  data: { name, country, year },
}: Props) {
  return (
    <div>
      <h3 id="qualification__name" className="mb-5 font-normal">
        {name}
      </h3>
      <span
        id="qualification__country"
        className="font-small mb-3 block text-[var(--text-color-light)]"
      >
        {country}
      </span>
      <span
        id="qualification__year"
        className="font-small block text-[var(--text-color-light)]"
      >
        {year}
      </span>
    </div>
  );
}
