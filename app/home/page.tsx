"use client";
import React, { useEffect, useState } from "react";
import equipos from "../../seed/equipos.json";
import { BiSolidRightArrow } from "react-icons/bi";

export default function Page() {
  const renderTeams = () => {
    return equipos.map((equipo) => (
      <button className="flex justify-between items-center w-[90%] bg-primary h-14">
        <h1 className="m-10 text-white text-2xl">{equipo.name}</h1>
        <BiSolidRightArrow className="m-10 text-white" />
      </button>
    ));
  };

  return (
    <main className="flex justify-around mt-5">
      <section className="w-96 min-h-[750px] border-2 border-border_color rounded-md">
        <div className=" border-border_color border-b-2">
          <h1 className="font-poppins text-3xl p-5 text-center text-white">
            Tus equipos
          </h1>
        </div>
        <div className="flex flex-col justify-around h-full items-center overflow-y-visible">
          {renderTeams()}
        </div>
      </section>
      <section className="w-[75%] max-h-[750px] flex flex-col justify-between">
        <aside className="w-full h-[80%] border-2 border-border_color rounded-md"></aside>
        <aside className="w-full h-[15%] border-2 border-border_color rounded-md"></aside>
      </section>
    </main>
  );
}
