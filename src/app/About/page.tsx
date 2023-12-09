import React from "react";
import { Users } from "../lib/Constants";
import UserCard from "../Components/UserCard";

export default function About() {
  return (
    <main className="flex flex-col items-center gap-20 px-12 py-20 w-full flex-grow">
      <section className="flex flex-col gap-12 items-center">
        <h2 className="text-6xl font-bold">Sobre nosotros</h2>
        <p className="text-xl">
          My buss es una empresa que te brindara la mejor información de los
          buses en armenia
        </p>
      </section>
      <h3 className="text-4xl font-bold">Our Team</h3>
      <section className="flex flex-wrap gap-12 justify-center">
        {Users.map(({ name, description, image, role }) => (
          <UserCard
            description={description}
            name={name}
            image={image}
            role={role}
          />
        ))}
      </section>
    </main>
  );
}
