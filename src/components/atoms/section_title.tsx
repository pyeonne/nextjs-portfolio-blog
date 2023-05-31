type Props = {
  title: string;
};

export default function SectionTitle({ title }: Props) {
  return <h2 className="section__title">{title}</h2>;
}
