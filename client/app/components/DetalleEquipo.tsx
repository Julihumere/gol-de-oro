import React from "react";
import { LogoEdit, LogoTrash } from "../icons/Icons";
import { Team } from "../types/types";
import Image from "next/image";
import camp from "../../public/images/campo_de_juego.png";

type Props = {
  teamSelected: Team | null;
  setTeamSelected: React.Dispatch<React.SetStateAction<Team | null>>;
};

export default function DetalleEquipo({
  teamSelected,
  setTeamSelected,
}: Props) {
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
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
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
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
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
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
                >
                  {player.name}
                </h1>
              ))}
          </div>

          {/* Delanteros */}
          <div className="w-full flex justify-around">
            {teamSelected?.players
              .filter((player) => player.position === "DEL")
              .map((player) => (
                <h1
                  key={player.name}
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
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
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
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
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
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
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
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
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
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
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
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
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
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
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
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
                  className="bg-primary text-sm max-w-32 px-1 py-1 text-center flex justify-center items-center text-white font-poppins break-words"
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
    <section className="w-full h-[80%] border-2 border-border_color rounded-md">
      <header className="flex items-center justify-between w-full h-[15%] px-10 border-b-2 border-border_color">
        <div className="flex items-center justify-around  w-72">
          <h1 className="font-poppins font-bold text-4xl text-center text-white">
            {teamSelected?.name}
          </h1>
          <button
            onClick={() => setTeamSelected(null)}
            className="bg-primary py-2 px-4 rounded-md text-white font-poppins"
          >
            Volver
          </button>
        </div>

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
  );
}
