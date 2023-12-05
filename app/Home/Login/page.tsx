"use client";

import { fetchLogin } from "@/app/lib/utils";

export default function login() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const id = String(data.get("id"));
    const password = String(data.get("password"));
    if (!id || !password) {
      return;
    } else {
      fetchLogin(id, password).then((res) => {
        console.log(res);
      });
    }
    console.log(id, password);
  };
  return (
    <div className="relative rounded-xl w-full h-full backdrop-brightness-90 p-12 flex flex-col gap-12 justify-center items-center">
      <h3 className="font-extrabold text-xl uppercase">Hola de vuelta</h3>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-12 w-5/6"
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="documentId"> documento </label>
          <input
            autoComplete="off"
            type="text"
            id="documentId"
            name="id"
            className="rounded-xl px-2 py-1 text-black"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password"> contraseña </label>
          <input
            autoComplete="off"
            type="password"
            id="password"
            name="password"
            className="rounded-xl px-2 py-1 text-black"
          />
        </div>
        <button className="rounded-xl text-white py-2 bg-primary-c w-36 hover:scale-105 transition-transform hover:opacity-90">
          Ingresar
        </button>
      </form>
    </div>
  );
}
