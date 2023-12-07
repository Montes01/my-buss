"use client";
import Link from "next/link";
import { Input } from "@/app/components/Input";

export default function Register() {
  return (
    <main className="w-full px-7 gap-12 backdrop-brightness-95 h-full py-20 flex flex-col items-center">
      <form className="max-w-md mx-auto flex flex-col w-full items-center gap-7">
        <Input
          required={true}
          type="text"
          name="name"
          label="Ingresa tu nombre"
        />
        <Input
          required={false}
          type="text"
          name="lastname"
          label="Ingresa tu apellido"
        />
        <Input
          required={true}
          type="email"
          name="email"
          label="Ingresa tu email"
        />
        <Input
          required
          type="password"
          name="password"
          label="Ingresa tu contraseña"
        />
        <Input
          required={true}
          type="password"
          name="password2"
          label="Confirmar contraseña"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-xl"
        >
          Registrarse
        </button>
      </form>
      <Link href="/Register/Driver" className="text-primary-c">
        ¿Quieres trabajar con nosotros?
      </Link>
    </main>
  );
}
