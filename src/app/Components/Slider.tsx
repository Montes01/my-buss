import Image from "next/image";
import x from "../global.module.css";

export default function Slider() {
  return (
    <div
      role="slider"
      className="flex w-full items-center h-full brightness-[0.2]"
    >
      <Image
        src="/Images/Buses/1.jpeg"
        alt="placeholder"
        width={1500}
        height={1500}
        className={`h-full w-auto object-cover ${x.slides}`}
      />
      <Image
        src="/Images/Buses/2.jpeg"
        alt="placeholder"
        width={1500}
        height={1500}
        className={`h-full w-auto object-cover ${x.slides}`}
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
  );
}
