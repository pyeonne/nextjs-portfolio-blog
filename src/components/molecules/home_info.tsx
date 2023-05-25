import { classNames } from "@/utils/class_names";

type Props = {
  type: "description" | "number";
  data: {
    title: string;
    paragraph: string;
  }[];
};

export default function HomeInfo({ type, data }: Props) {
  return (
    <div className="grid gap-y-8">
      {data.map(({ title, paragraph }) => (
        <div key={title}>
          <h3 className="mb-4 text-smaller font-normal uppercase text-[var(--text-color-light)]">
            {title}
          </h3>
          <p
            className={classNames(
              type === "number" ? "text-h1 font-semibold" : "",
              "pr-16 text-[var(--title-color)]"
            )}
          >
            {paragraph.split("\n").map((line) => (
              <>
                {line}
                <br />
              </>
            ))}
          </p>
        </div>
      ))}
    </div>
  );
}
