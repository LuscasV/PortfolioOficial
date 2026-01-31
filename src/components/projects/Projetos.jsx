import "./projetos.css";
import { useState } from "react";
import Projeto from "./Projeto";

const Projetos = () => {
  const [ category, setCategory] = useState("frontend")
  return (
    <section id="projetos" className="portfolio section">
      <h2 className="section__title">Projetos</h2>
      <span className="section__subtitle">Meus projetos recentes</span>
      <div className="project-button">
        <button className={category === "fullstack" ? "active" : ""} onClick={() => setCategory("fullstack")}>Full Stack</button>
        <button className={category === "frontend" ? "active" : ""} onClick={() => setCategory("frontend")}>Front End</button>
        <button className={category === "backend" ? "active" : ""} onClick={() => setCategory("backend")}>Back End</button>
      </div>
      <Projeto category={category}/>
    </section>
  );
};

export default Projetos;
