type Props = {
  subtitle: string;
};

export default function SectionSubtitle({ subtitle }: Props) {
  return <span className="section__subtitle">{subtitle}</span>;
}
