import React from "react";

import "./Footer.css";
import { IoLogoElectron } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="gray-container ">
      <section>
        <IoLogoElectron />
      </section>
      <section>
        <p className="fw-normal mb-0">ITI TO-DO REACT APPLICATION FINAL PROJECT.</p>
        <p className="fst-italic mb-0">Copyright&copy; 2021/2022. Todo App with reactJs.</p>
      </section>
    </footer>
  );
};

export default Footer;
