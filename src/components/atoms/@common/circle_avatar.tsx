import { classNames } from "@/utils/class_names";

type Props = {
  radius: number;
  text: string;
};

export default function CircleAvatar({ radius, text }: Props) {
  return (
    <article
      style={{ width: `${radius}px`, height: `${radius}px` }}
      className={classNames(getContainerStyle(radius), "bg-blue-50")}
    >
      {text}
    </article>
  );
}

function getContainerStyle(radius: number): string {
  const baseStyle = "rounded-full flex items-center justify-center";

  return `${baseStyle} ${getImageSizeStyle(radius)}`;
}

function getImageSizeStyle(radius: number): string {
  return `w-${radius} h-${radius}`;
}
