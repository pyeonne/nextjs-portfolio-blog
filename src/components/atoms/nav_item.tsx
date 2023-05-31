import Link from "next/link";

type Props = {
  href: string;
  icon: React.ReactNode;
  title: string;
};

export default function NavItem({ href, icon, title }: Props) {
  return (
    <li key={href} id="nav-item">
      <Link
        href={href}
        className="nav__link flex flex-col items-center gap-y-1 text-smaller text-[var(--text-color-light)] transition-color duration-400 hover:text-[var(--title-color)]"
      >
        {icon} {title}
      </Link>
    </li>
  );
}
