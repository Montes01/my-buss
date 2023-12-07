import ThemeButton from "./ThemeButton";
import Image from "next/image";
import SideBar from "./SideBar";
import HeaderNav from "./HeaderNav";
import Link from "next/link";

export default function Header() {
  return (
    <header
      className={`flex justify-between items-center py-5 w-full px-12 md:sticky top-0 left-0 z-20 bg-inherit`}
    >
      <Link className="h-12 w-12 flex-grow basis-0 " href="/Home">
        <Image
          src="/Images/logo.png"
          width={500}
          height={500}
          alt="logo"
          className="h-full w-auto hover:scale-110 transition-transform   "
        />
      </Link>
      <nav className="hidden md:block">
        <HeaderNav />
      </nav>
      <section className="md:flex-grow md:basis-0 flex justify-end">
        <ThemeButton />
      </section>
      <section className="md:hidden flex-grow basis-0 flex justify-end">
        <SideBar />
      </section>
    </header>
  );
}
