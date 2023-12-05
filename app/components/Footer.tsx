// Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col py-12 w-full items-center justify-center gap-12 bg-maximum text-inherit">
      <p>
        <strong> &copy; 2023</strong> Tu Empresa. Todos los derechos reservados.
      </p>
      <div className="footer-content">
        <ul className="flex w-full justify-center items-center gap-7">
          <li className="hover:underline">
            <a href="/">Inicio</a>
          </li>
          <li className="hover:underline">
            <a href="/Servicios">Servicios</a>
          </li>
          <li className="hover:underline">
            <a href="/Contacto">Contacto</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
