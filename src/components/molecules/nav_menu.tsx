import { classNames } from "@/utils/class_names";

import HomeIcon from "../atoms/icons/home_icon";
import ChatIcon from "../atoms/icons/chat_icon";
import CloseButton from "../atoms/buttons/close_button";
import ImageIcon from "../atoms/icons/image_icon";
import WorkIcon from "../atoms/icons/work_icon";
import GameIcon from "../atoms/icons/game_icon";
import StarIcon from "../atoms/icons/star_icon";
import Link from "next/link";
import NavItem from "./nav_item";

type Props = {
  showMenu: boolean;
  onClosePressed: () => void;
};

const menu = [
  {
    href: "#home",
    icon: <HomeIcon size={28} />,
    title: "Home",
  },
  {
    href: "#skills",
    icon: <GameIcon size={28} />,
    title: "Skills",
  },
  {
    href: "#qualification",
    icon: <StarIcon size={28} />,
    title: "Qualification",
  },
  {
    href: "#service",
    icon: <WorkIcon size={28} />,
    title: "Service",
  },
  {
    href: "#projects",
    icon: <ImageIcon size={28} />,
    title: "Projects",
  },
  {
    href: "#contact",
    icon: <ChatIcon size={28} />,
    title: "Contact",
  },
];

export default function NavMenu({ showMenu, onClosePressed }: Props) {
  return (
    <div
      id="nav-menu"
      className={classNames(
        showMenu ? "bottom-8" : "-bottom-[60%]",
        "fixed left-0 right-0 mx-auto my-0 grid w-[88%] rounded-[2rem] bg-[var(--body-color)] px-8 pb-20 pt-6 shadow-custom transition-bottom duration-300"
      )}
    >
      <ul
        id="nav-list"
        className="grid grid-cols-3 justify-center gap-x-12 gap-y-8"
      >
        {menu.map(({ href, icon, title }) => (
          <NavItem key={href} href={href} icon={icon} title={title} />
        ))}
      </ul>

      <CloseButton
        onPressed={onClosePressed}
        classes="absolute bottom-6 right-6"
      />
    </div>
  );
}
