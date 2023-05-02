import React from 'react';

const Footer = () => {
  return (
    <footer className="z-10 bg-black text-white py-4 px-6 mt-auto">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">Aducion</h3>
            <p className="text-sm">&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
          </div>
          <div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;