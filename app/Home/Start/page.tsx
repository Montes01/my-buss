import NavIcon from "@/app/components/NavIcon";
import { PrincipalMessage, ProjectName } from "@/app/lib/Constants";
import { IconPhone, IconBrandAndroid, IconBrandInstagram } from "@tabler/icons-react";

export default function page() {
  return (
    <div className="relative rounded-xl w-full h-full backdrop-brightness-90 p-12 flex flex-col gap-12 justify-center items-center">
      <h3 className="font-bold text-4xl uppercase">{ProjectName}</h3>
      <p className="text-lg tracking-normal leading-relaxed max-w-[60ch] text-center">
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
  );
}
