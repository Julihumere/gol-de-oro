import React from "react";

type Props = {};

export default function ComienzoJuegos({}: Props) {
  return (
    <main className="w-full h-[80%] border-2 border-border_color rounded-md">
      <h1 className="font-irish text-5xl text-primary">Bienvenido</h1>

      <h2>
        En este juego deberas crear dos equipos para que se enfrenten y
        descubrir quien ganara, tendras que nombrar tu equipo y seleccionar 5
        jugadores sin repetir
      </h2>
    </main>
  );
}
