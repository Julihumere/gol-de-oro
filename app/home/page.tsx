"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import equipos from "../../seed/equipos.json";
import { BiSolidRightArrow } from "react-icons/bi";
import { LogoEdit, LogoTrash } from "../icons/Icons";
import { Team, TeamPlayer } from "../types/types";
import camp from "../../public/images/campo_de_juego.png";

export default function Page() {
  const [teamSelected, setTeamSelected] = useState<Team | null>(null);

  const renderTeams = () => {
    return equipos.map((equipo) => (
      <button
        key={equipo.id}
        className="flex justify-between items-center w-[90%] bg-primary h-14 mt-5"
        onClick={() => setTeamSelected(equipo)}
      >
        <h1 className="m-10 text-white text-2xl">{equipo.name}</h1>
        <BiSolidRightArrow className="m-10 text-white" />
      </button>
    ));
  };

  const renderFormation = () => {
    return teamSelected?.players.map((player) => (
      <button className="bg-secondary w-72 h-10">
        <h1 className="text-white text-lg font-bold">
          {player.name} | {player.position}
        </h1>
      </button>
    ));
  };

  const formation = () => {
    if (teamSelected?.formation === "1-1-2") {
      return (
        <div className="w-full h-[480px] flex flex-col items-center justify-around absolute top-0">
          {/* Portero */}
          <div className="w-full flex justify-center">
            {teamSelected?.players
              .filter((player) => player.position === "POR")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>

          {/* Defensa */}
          <div className="w-full flex justify-center">
            {teamSelected?.players
              .filter((player) => player.position === "DEF")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>

          {/* Mediocampistas */}
          <div className="w-full flex justify-around">
            {teamSelected?.players
              .filter((player) => player.position === "MED")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>

          {/* Delanteros */}
          <div className="w-full flex justify-center">
            {teamSelected?.players
              .filter((player) => player.position === "DEL")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>
        </div>
      );
    } else if (teamSelected?.formation === "2-1-1") {
      return (
        <div className="w-full h-[480px] flex flex-col items-center justify-around absolute top-0">
          {/* Portero */}
          <div className="w-full flex justify-center">
            {teamSelected?.players
              .filter((player) => player.position === "POR")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>

          {/* Defensas */}
          <div className="w-full flex justify-around">
            {teamSelected?.players
              .filter((player) => player.position === "DEF")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>

          {/* Mediocampista */}
          <div className="w-full flex justify-center">
            {teamSelected?.players
              .filter((player) => player.position === "MED")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>

          {/* Delantero */}
          <div className="w-full flex justify-center">
            {teamSelected?.players
              .filter((player) => player.position === "DEL")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>
        </div>
      );
    } else if (teamSelected?.formation === "1-2-1") {
      return (
        <div className="w-full h-[480px] flex flex-col items-center justify-around absolute top-0">
          {/* Portero */}
          <div className="w-full flex justify-center">
            {teamSelected?.players
              .filter((player) => player.position === "POR")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>

          {/* Defensas */}
          <div className="w-full flex justify-center">
            {teamSelected?.players
              .filter((player) => player.position === "DEF")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>

          {/* Mediocampistas */}
          <div className="w-full flex justify-around">
            {teamSelected?.players
              .filter((player) => player.position === "MED")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>

          {/* Delantero */}
          <div className="w-full flex justify-center">
            {teamSelected?.players
              .filter((player) => player.position === "DEL")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary w-32 h-10 text-center"
                >
                  {player.name}
                </h1>
              ))}
          </div>
        </div>
      );
    }
  };

  return (
    <main className="flex justify-around mt-5">
      <section className="w-96 min-h-[750px] border-2 border-border_color rounded-md overflow-hidden">
        <div className=" border-border_color border-b-2">
          <h1 className="font-poppins text-3xl p-5 text-center text-white">
            Tus equipos
          </h1>
        </div>
        <div className="flex flex-col h-[70vh] w-[98%] items-center overflow-y-scroll">
          {renderTeams()}
        </div>
      </section>
      <section className="w-[75%] max-h-[750px] flex flex-col justify-between">
        <section className="w-full h-[80%] border-2 border-border_color rounded-md">
          <header className="flex items-center justify-between w-full h-[15%] px-10 border-b-2 border-border_color">
            <h1 className="font-poppins font-bold text-4xl text-center text-white">
              Estadísticas
            </h1>
            <div className="w-36 flex justify-around items-center">
              <button>
                <LogoEdit />
              </button>
              <button>
                <LogoTrash />
              </button>
            </div>
          </header>
          <div className="flex h-[85%] items-center justify-around">
            <div className="w-96 h-[450px] border-2 border-border_color flex flex-col items-center justify-evenly">
              <h1 className="text-white font-poppins font-bold">
                {"Formación: " + teamSelected?.formation}
              </h1>

              {teamSelected && renderFormation()}
            </div>

            <div className="w-80 h-[480px] relative z-0">
              <Image
                src={camp}
                alt="Soccer field"
                className="w-80 h-[480px] absolute top-0 z-10"
              />
              <div className="w-80 h-[450px] bg-transparent z-10 absolute">
                {teamSelected && formation()}
              </div>
            </div>
          </div>
        </section>
        <section className="w-full h-[15%] border-2 border-border_color rounded-md flex items-center justify-center">
          <button>
            <h1 className="font-poppins font-bold text-2xl text-center text-white bg-primary p-5 rounded-md">
              Crear nuevo equipo
            </h1>
          </button>
        </section>
      </section>
    </main>
  );
}
