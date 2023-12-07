import Link from "next/link";
import React from "react";

interface NavButtonProps {
  label: string;
  href: string;
  children?: React.ReactNode;
}

export default function NavButton({ label, href, children }: NavButtonProps) {
  return (
    <li>
      <Link
        href={href}
        className="bg-primary-c text-white font-bold hover:scale-105 transition-transform hover:opacity-90 py-2 px-4 rounded flex gap-1 justify-center w-32"
      >
        {children}
        {label}
      </Link>
    </li>
  );
}
