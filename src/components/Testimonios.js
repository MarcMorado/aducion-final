import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import Image from "next/image";
import "tailwindcss/tailwind.css";

const NuestrosResultados = () => {
  return (
    <div className="p-6">
      <h3 className="flex justify-center pt-6 about-subtitle">
        Nuestros resultados
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-6 pt-6 pb-6">
        <div className="flex md:justify-end md:pr-6 justify-center pr-0">
          <ReactPlayer
            url="https://youtu.be/gfrQ6CH0LQo"
            controls={true}
          />
        </div>
        <div className="flex md:justify-start md:pl-6 justify-center pl-0">
          <ReactPlayer
            url="https://youtu.be/Ytzwp47HsqE"
            controls={true}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pb-6">
        <div className="flex justify-center">
        <img
            src="https://i.imgur.com/t3bg2M2.png"
            alt="Star Wars logo"
            width={250} height={1350} 
          />
        </div>
        <div className="flex justify-center">
          <img src="https://i.imgur.com/1pzqLJv.png" alt="Chat Venta" width={250} height={1350} />
        </div>
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/Hgu5WJa.png"
            alt="Chat Nueva Exclusiva"
            width={250}
            height={1350}
          />
        </div>
        <div className="flex justify-center">
          <img
            src="https://i.imgur.com/NYR4Lba.png"
            alt="Chat Cita Confirmada"
            width={250}
            height={1350}
          />
        </div>
        <div className="flex justify-center">
          <img src="https://i.imgur.com/gegbTcz.png" alt="Chat Exclusiva" width={250} height={1350} />
        </div>
        <div className="flex justify-center">
          <img src="https://i.imgur.com/G9JMNfd.png" alt="Chat Cita" width={250} height={1350} />
        </div>
      </div>
    </div>
  );
};

export default NuestrosResultados;
