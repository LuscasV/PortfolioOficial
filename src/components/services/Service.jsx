import "./service.css";

const Service = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Serviços</h2>
      <span className="section__subtitle">O que eu ofereço</span>

      <div className="services-container">
        <div className="flex-box">
        <div className="service-box">
          <div className="service-info">
            <div className="texto-center">
              <h4 className="box1">Criação de Sites</h4>
            <p>
              Transformo suas ideias em um site profissional e atrativo, focado
              em transmitir sua mensagem de forma clara e eficaz.
            </p>
            </div>
          </div>
        </div>
        </div>

        <div className="flex-box">
        <div className="service-box">
          <div className="service-info parte2">
            <div className="texto-center">
            <h4 className="box2">Criação de <br />Landing Pages</h4>
            <p>
              Crio páginas de destino impactantes e otimizadas para converter
              visitantes em clientes, utilizando técnicas comprovadas de design
              e persuasão.
            </p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
