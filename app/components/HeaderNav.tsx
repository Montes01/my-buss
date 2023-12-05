import {
  IconHome2,
  IconLogin,
  IconNotebook,
  IconInfoHexagon,
} from "@tabler/icons-react";
import NavButton from "./NavButton";

export default function HeaderNav() {
  return (
    <ul className="flex justify-center w-full gap-2 flex-col md:flex-row">
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
  );
}
