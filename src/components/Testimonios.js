import React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import Image from "next/image";
import "tailwindcss/tailwind.css";

const NuestrosResultados = () => {
  return (
    <div className="p-6 bg-Black">
      <h3 className="flex justify-center pt-6 about-subtitle">
        Resultados recientes de asesores inmobiliarios como tú:
      </h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-6 pt-6 pb-6">
        <div className="flex md:justify-end md:pr-6 justify-center pr-0">
          <ReactPlayer url="https://youtu.be/gfrQ6CH0LQo" controls={true} />
        </div>
        <div className="flex md:justify-start md:pl-6 justify-center pl-0">
          <ReactPlayer url="https://youtu.be/Ytzwp47HsqE" controls={true} />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4 pb-6">
        <div className="flex justify-center md:pl-60">
          <img
            src="https://i.imgur.com/LYj2cEG.png"
            alt="Star Wars logo"
            width={450}
            height={1350}
          />
        </div>
        <div className="flex justify-center md:pr-60">
          <img
            src="https://i.imgur.com/CxXJrI9.png"
            alt="Chat Venta"
            width={450}
            height={1350}
          />
        </div>
        <div className="flex justify-center md:pl-60">
          <img
            src="https://i.imgur.com/Pa0Z8Cc.png"
            alt="Chat Nueva Exclusiva"
            width={450}
            height={1350}
          />
        </div>
        <div className="flex justify-center md:pr-60">
          <img
            src="https://i.imgur.com/eMQIRae.jpg"
            alt="Chat Cita Confirmada"
            width={450}
            height={1350}
          />
        </div>
        <div className="flex justify-center md:pl-60">
          <img
            src="https://i.imgur.com/2UPcaMu.png"
            alt="Chat Exclusiva"
            width={450}
            height={1350}
          />
        </div>
        <div className="flex justify-center md:pr-60">
          <img
            src="https://i.imgur.com/IzX18mO.png"
            alt="Chat Cita"
            width={450}
            height={1350}
          />
        </div>
        <div className="flex justify-center md:pl-60">
          <img
            src="https://i.imgur.com/uUrhdDD.png"
            alt="Chat Cita"
            width={450}
            height={1350}
          />
        </div>
        <div className="flex justify-center md:pr-60">
          <img
            src="https://i.imgur.com/5C3sIZd.png"
            alt="Chat Cita"
            width={450}
            height={1350}
          />
        </div>
        <div className="flex justify-center md:pl-60">
          <img
            src="https://i.imgur.com/vonoOaQ.jpg"
            alt="Chat Cita"
            width={450}
            height={1350}
          />
        </div>
        <div className="flex justify-center md:pr-60">
          <img
            src="https://i.imgur.com/JUT2Aqs.png"
            alt="Chat Cita"
            width={450}
            height={1350}
          />
        </div>
      </div>
    </div>
  );
};

export default NuestrosResultados;
