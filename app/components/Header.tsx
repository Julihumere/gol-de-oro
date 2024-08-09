"use client";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";

export default function Header() {
  const [name, setName] = useState<string | null>("");
  useEffect(() => {
    setName(window.localStorage.getItem("name"));
  }, []);

  return (
    <div className="w-full h-[80px] bg-[#1c1c1c] text-white flex items-center justify-between lg:h-[150px] md:h-[100px]">
      <Image
        src={require("../../public/images/logo.png")}
        alt="Logo de gol de oro"
        width={100}
        className="m-10 w-16 h-16 "
      />
      {name !== "" && (
        <h1 className="text-2xl text-white font-irish m-10 lg:text-5xl md:text-3xl">
          Hola, {name}
        </h1>
      )}
    </div>
  );
}
