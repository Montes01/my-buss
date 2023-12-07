"use client";
import { IconMenuDeep, IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";
import HeaderNav from "./HeaderNav";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button role="menubar" onClick={handleClick}>
        <IconMenu2 />
      </button>
      <menu
        style={
          !isOpen
            ? {
                transform: "translateX(24rem)",
                opacity: 0,
              }
            : {}
        }
        className="fixed top-0 h-screen bg-primary transition-all right-0 px-2 max-h-screen flex flex-col py-2 gap-7"
      >
        <button
          role="menubar"
          className="border-l backdrop-brightness-75 p-2 rounded-xl flex justify-end items-center"
          onClick={handleClick}
        >
          <IconMenuDeep />
        </button>
        <HeaderNav />
      </menu>
    </>
  );
}
