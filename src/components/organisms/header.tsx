"use client";

import { useEffect, useState } from "react";

import ToggleButton from "../atoms/buttons/toggle_button";
import NavMenu from "../molecules/nav_menu";

export default function Header() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onTogglePressed = () => {
    setShowMenu(!showMenu);
  };

  const onClosePressed = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const navLink = document.querySelectorAll(".nav__link");
    navLink.forEach((link) => link.addEventListener("click", onClosePressed));

    return () => {
      navLink.forEach((link) =>
        link.removeEventListener("click", onClosePressed)
      );
    };
  }, []);

  return (
    <header
      className="fixed bottom-8 left-0 z-[var(--z-fixed)] w-full"
      id="header"
    >
      <nav className="container flex h-16 items-center justify-between rounded-[3rem] bg-[var(--body-color)] px-6 shadow-custom">
        <a
          href="#"
          className="font-title font-medium text-[var(--title-color)]"
        >
          Hana
        </a>
        <NavMenu showMenu={showMenu} onClosePressed={onClosePressed} />
        <div className="nav__buttons">
          {/* Theme change button */}
          {/* <MoonIcon /> */}

          <ToggleButton onPressed={onTogglePressed} />
        </div>
      </nav>
    </header>
  );
}
