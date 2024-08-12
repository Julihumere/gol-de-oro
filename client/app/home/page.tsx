"use client";
import React, { useEffect, useState } from "react";
import equipos from "../../seed/equipos.json";
import { BiSolidRightArrow } from "react-icons/bi";
import { Team } from "../types/types";
import DetalleEquipo from "../components/DetalleEquipo";
import ComienzoJuegos from "../components/ComienzoJuegos";

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

  return (
    <main className="flex justify-around mt-5">
      <section className="w-96 min-h-[750px]">
        <div className="w-96 min-h-[150px] border-2 border-border_color rounded-md">
          <div className=" border-border_color border-b-2">
            <h1 className="font-poppins text-3xl p-5 text-center text-white">
              Equipos
            </h1>
          </div>
          <div className="flex flex-col h-[20vh] w-[98%] items-center">
            {renderTeams()}
          </div>

          <div></div>
        </div>
      </section>

      <section className="w-[75%] max-h-[750px] flex flex-col justify-between">
        {teamSelected != null ? (
          <DetalleEquipo
            teamSelected={teamSelected}
            setTeamSelected={setTeamSelected}
          />
        ) : (
          <ComienzoJuegos />
        )}

        <section className="w-full h-[15%] border-2 border-border_color rounded-md flex items-center justify-around">
          {equipos.length == 2 ? null : (
            <button>
              <h1 className="font-poppins font-bold text-2xl text-center text-white bg-primary p-5 rounded-md">
                Crear nuevo equipo
              </h1>
            </button>
          )}
          {equipos.length < 2 ? null : (
            <button>
              <h1 className="font-poppins font-bold text-2xl text-center text-white bg-primary p-5 rounded-md">
                Jugar
              </h1>
            </button>
          )}
        </section>
      </section>
    </main>
  );
}
