import Image from "next/image";
import x from "@/app/global.module.css";

export default function Slider() {
  return (
    <section className="p-2 h-full relative">
      <div
        role="slider"
        className="flex w-full rounded-xl overflow-x-hidden items-center h-full brightness-[0.2]"
      >
        <Image
          src="/Images/Buses/1.jpeg"
          alt="placeholder"
          className={`h-full w-auto object-cover ${x.slides}`}
          width={1500}
          height={1500}
        />
        <Image
          src="/Images/Buses/2.jpeg"
          alt="placeholder"
          className={`h-full w-auto object-cover ${x.slides}`}
          width={1500}
          height={1500}
        />
        <Image
          src="/Images/Buses/3.jpeg"
          alt="placeholder"
          width={1500}
          height={1500}
          className={`h-full w-auto object-cover ${x.slides}`}
        />
        <Image
          src="/Images/Buses/4.jpeg"
          alt="placeholder"
          width={1500}
          height={1500}
          className={`h-full w-auto object-cover ${x.slides}`}
        />
      </div>
      <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 m-auto z-20 font-bold text-white text-4xl text-center">
        Welcome to <br /> <span> My </span> Buss
      </h2>
    </section>
  );
}
