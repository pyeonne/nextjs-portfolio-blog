import Link from "next/link";

type Props = {
  href: string;
  icon: React.ReactElement;
};

export default function SocialLink({ href, icon }: Props) {
  return (
    <Link
      href={href}
      className="text-[var(--text-color-light)] transition-color duration-300 hover:text-[var(--title-color)]"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </Link>
  );
}
