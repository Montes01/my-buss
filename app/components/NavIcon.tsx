import Link from "next/link";

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
        className="bg-tertiary-c text-white font-bold hover:scale-105 transition-transform hover:opacity-90 py-3 px-4 rounded text-sm text-ellipsis flex flex-col items-center gap-1 justify-center w-28"
      >
        {children}
        {label}
      </Link>
    </li>
  );
}