import { Services as ServicesData } from "../lib/Constants";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div id="Servicios" className="py-20">
      <div className="w-full flex flex-col items-center gap-7 justify-center py-20">
        <h2 className="text-4xl font-bold text-center">
          Descubre nuestros servicios
        </h2>
        <p className="text-xl px-5">
          Explora las diversas opciones que ofrecemos para hacer tu viaje más
          fácil y cómodo:
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-12 p-5">
        {ServicesData.map(({ description, image, href, title }, index) => (
          <ServiceCard
            key={index}
            description={description}
            image={image}
            href={href}
            title={title}
          />
        ))}
      </div>
    </div>
  );
}
