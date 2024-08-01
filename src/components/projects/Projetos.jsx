import "./projetos.css";
import Projeto from "./Projeto";

const Projetos = () => {
  return (
    <section id="projetos" className="portfolio section">
      <h2 className="section__title">Projetos</h2>
      <span className="section__subtitle">Meus projetos recentes</span>

      <Projeto />
    </section>
  );
};

export default Projetos;
