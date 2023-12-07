"use client";

import { fetchLogin } from "../../lib/utils";

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
    <div className="relative rounded-xl w-[30rem]  h-auto py-20 backdrop-brightness-90 px-12
     text-white flex flex-col gap-12 backdrop-blur-3xl justify-center items-center">
      <h3 className="font-extrabold sm:text-3xl uppercase text-lg">Bienvenido de nuevo</h3>
      <form
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col gap-12 w-5/6 max-w-[400px]"
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
