import { type UserCard as Props } from "../lib/declarations";
import Image from "next/image";
export default function UserCard({ description, image, name, role }: Props) {
  return (
    <article className="flex flex-col backdrop-brightness-125 items-start justify-between w-96 p-5 h-52 relative rounded-xl border">
      <section className="flex flex-col gap-5">
        <h2>{name}</h2>
        <strong>{role}</strong>
      </section>
      <p>{description}</p>
      <Image
        className="rounded-full absolute top-5 right-5 w-12 h-12 object-cover "
        src={"/next.svg"}
        alt={`image about ${name}`}
        width={500}
        height={500}
      />
    </article>
  );
}
