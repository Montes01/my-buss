import NavButton from "./NavButton";
import {
  IconHome2,
  IconInfoHexagon,
  IconLogin,
  IconNotebook,
} from "@tabler/icons-react";
import ThemeButton from "./ThemeButton";
import { ProjectName } from "../lib/Constants";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 w-screen px-12">
      <h1 className="text-2xl font-bold flex-grow basis-0">{ProjectName}</h1>
      <nav className="">
        <ul className="flex justify-center flex-row w-full gap-2">
          <NavButton label="Inicio" href="/Home/Start">
            <IconHome2 />
          </NavButton>
          <NavButton label="Login" href="/Home/Login">
            <IconLogin />
          </NavButton>
          <NavButton label="Registro" href="#">
            <IconNotebook />
          </NavButton>
          <NavButton label="About" href="#">
            <IconInfoHexagon />
          </NavButton>
        </ul>
      </nav>
      <section className="flex-grow basis-0 flex justify-end">
        <ThemeButton />
      </section>
    </header>
  );
}
