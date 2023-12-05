"use client";
import { IconMenu2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import HeaderNav from "./HeaderNav";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    if (isOpen) {
      alert("isOpen");
    }
  }, [isOpen]);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button role="menubar" onClick={handleClick}>
        <IconMenu2 />
      </button>
      <menu className="absolute min-h-screen translate-x-96">
        <HeaderNav />
      </menu>
    </>
  );
}
