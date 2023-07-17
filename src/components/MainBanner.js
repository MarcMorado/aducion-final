import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const MainBanner = () => {
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <div className="relative h-screen w-full">
      <img
        src="/bg-main2.png"
        alt="Fondo del banner"
        className="absolute inset-0 object-cover w-full h-full"
      />
      <div className="relative h-full w-full">
        <CSSTransition
          in={showText}
          timeout={1500}
          classNames="slide"
          unmountOnExit
        >
          <div className="title-banner">
            <h1 className="text-gray-200 sm:text-6xl text-3xl font-bold mb-4">
            Lleva tu negocio inmobiliario <br/>al siguiente nivel
            </h1>
            <br />
            <h2 className="text-white sm:text-8xl text-5xl font-semibold">
              Aducion
            </h2>
          </div>
        </CSSTransition>
        <CSSTransition
          in={showText}
          timeout={1500}
          classNames="slide2"
          unmountOnExit
        >
          <div className="button-banner">
            <a
              href="https://api.leadconnectorhq.com/widget/booking/fAhoAtWhpRfctJ9OEiHc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 text-white font-semibold py-2 px-4"
            >
              Empieza Hoy!
            </a>
          </div>
        </CSSTransition>
        <CSSTransition
          in={showText}
          timeout={1500}
          classNames="slide2"
          unmountOnExit
        >
            <div className="flex sm:flex-row flex-col text-white items-banner">
                <div className="info-banner">
                    <h3>
                    Comunicación disruptiva    
                    </h3>
                    <br/>
                    <p>
                    ¿Por qué seguir el camino convencional cuando puedes encabezar la revolución en el ámbito inmobiliario?
                    </p>
                </div>
                <div className="info-banner">
                    <h3>
                    Supera a tu competencia
                    </h3>
                    <br/>
                    <p>
                    Te posicionaremos como una autoridad en el sector para que consigas aumentar tus ventas.
                    </p>
                </div>
                <div className="info-banner">
                    <h3>
                    Metodología realista   
                    </h3>
                    <br/>
                    <p>
                    Esto no es un sistema mágico, lo que tenemos es un equipo especializado en el marketing inmobiliario.
                    </p>
                </div>
            </div>
        </CSSTransition>
      </div>
    </div>
  );
};

export default MainBanner;
