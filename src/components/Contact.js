import React from "react";
import { FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="z-10 bg-gray-900 text-white py-4 px-6 mt-auto contact">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a
            href="https://www.linkedin.com/in/pol-morado-a2975022b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-white hover:text-red-500"
          >
            <FaLinkedin size={50} />
          </a>
          <h1 className="contact-title">Hablamos?</h1>
          <div className="button-contact">
            <a
              href="https://api.leadconnectorhq.com/widget/booking/diEdpzqEVKIPGSWxuajT"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-500 text-white font-semibold py-2 px-4"
            >
              Elije fecha!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
