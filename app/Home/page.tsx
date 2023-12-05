import NavIcon from "@/app/components/NavIcon";
import Services from "@/app/components/Services";
import { PrincipalMessage, ProjectName } from "@/app/lib/Constants";
import {
  IconPhone,
  IconBrandAndroid,
  IconBrandInstagram,
} from "@tabler/icons-react";
import x from "@/app/global.module.css";

export default function page() {
  return (
    <>
      <div className="text-white relative rounded-xl backdrop-brightness-90 px-12 flex flex-col gap-12 backdrop-blur-2xl py-20 justify-center items-center">
        <h3 className="font-bold text-4xl uppercase">{ProjectName}</h3>
        <p
          className={`text-lg tracking-normal leading-relaxed max-w-[60ch] text-center ${x.pretty}`}
        >
          {PrincipalMessage}
        </p>
        <section className="w-full">
          <ul className="list-none flex flex-wrap justify-center gap-12 items-center">
            <NavIcon label="Contactanos" href="/Home/Contact">
              <IconPhone />
            </NavIcon>
            <NavIcon label="App" href="/Home/Contact">
              <IconBrandAndroid />
            </NavIcon>
            <NavIcon label="Redes" href="/Home/Contact">
              <IconBrandInstagram />
            </NavIcon>
          </ul>
        </section>
        <footer className="w-full text-center">
          All rights reserved &copy; {new Date().getFullYear()}
        </footer>
      </div>
    </>
  );
}
