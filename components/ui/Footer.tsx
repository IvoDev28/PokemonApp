// En MiComponente.js
import Image from "next/image";
import React from "react";
import NextLink from "next/link";

function Footer() {
  return (
    <footer className="bg-white/10 h-[20rem]  md:h-auto md:py-8 w-full flex flex-col justify-center items-center select-none">
      <div className="flex flex-col w-full justify-center items-center gap-y-3 mt-6 max-w-[1184px]">
        <div className="w-full  flex flex-col justify-center items-center gap-y-3 md:flex-row md:justify-between md:px-4 md:mb-4 min-[1184px]:px-0">
          <div className="flex justify-center items-center">
            <h2 className="font-bold text-[1.8rem] leading-6 mb-4 md:mb-0">
              Ivan Lucana
            </h2>
          </div>
          <div className="flex flex-col gap-y-2 justify-center items-center md:flex-row md:gap-x-6 md:gap-y-0">
            <h2 className="text-[1.3rem]">About</h2>
            <h2 className="text-[1.3rem]">Privacy Policy</h2>
            <h2 className="text-[1.3rem]">Licensing</h2>
            <h2 className="text-[1.3rem]">Contact</h2>
          </div>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-y-3 md:px-4 min-[1184px]:px-0 ">
          <div className="h-[1px] w-full bg-white/40"></div>
          <h2 className="text-sm text-gray-500 md:mt-4">
            © 2023 Ivo™. All Rights Reserved.
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default Footer; // Asegúrate de exportar el componente así
