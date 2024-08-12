"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function Landing() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setName(value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name) {
      setError(true);
      return;
    }
    localStorage.setItem("name", name);
    window.location.href = "/home";
  };

  return (
    <main>
      <div className="h-[500px] flex flex-col items-center justify-around mt-10 lg:mt-40 md:mt-20">
        <h1 className="font-irish text-4xl text-center text-primary lg:text-7xl md:text-6xl">
          Bienvenidos a Gol de oro
        </h1>
        <h3 className="text-white font-poppins text-sm w-[80%] text-center lg:text-2xl md:text-lg">
          Aqui podras crear el equipo de tus sueños y ponerlos a competir
        </h3>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center justify-around h-64"
        >
          <h4 className="text-white font-poppins text-md lg:text-2xl md:text-lg">
            Ingresa tu nombre
          </h4>
          <input
            onChange={(e) => handleChange(e)}
            value={name}
            name="name"
            className="w-70 h-10 text-white text-lg px-4 border-solid border rounded-md border-border_color bg-transparent lg:w-96 md:w-80"
          />
          {error && (
            <p className="text-lg text-red-700 font-poppins font-bold">
              Debes ingresar tu nombre
            </p>
          )}
          <button
            type="submit"
            className="w-56 h-12 bg-primary font-poppins font-bold text-white rounded-xl lg:w-72 lg:h-16 md:w-64 md:h-14"
          >
            Continuar
          </button>
        </form>
      </div>
    </main>
  );
}
