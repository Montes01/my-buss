import {
  IconHome2,
  IconLogin,
  IconNotebook,
  IconInfoHexagon,
} from "@tabler/icons-react";
import NavButton from "./NavButton";
import x from "@/app/global.module.css";
export default function HeaderNav() {
  return (
    <ul className={`flex justify-center w-full gap-2 flex-col md:flex-row  ${x.noScroll}`}>
      <NavButton label="Inicio" href="/Home">
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
