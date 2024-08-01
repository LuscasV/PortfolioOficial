const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bxs-graduation about__icon"></i>

        <h3 className="about__title">Formação</h3>
        <span className="about__subtitle">Faculdade + Curso</span>
      </div>

      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>

        <h3 className="about__title">Feitos</h3>
        <span className="about__subtitle">35 + Projetos</span>
      </div>

      <div className="about__box">
        <i class="bx bx-support about__icon"></i>

        <h3 className="about__title">Suporte</h3>
        <span className="about__subtitle">Online 24/7</span>
      </div>
    </div>
  );
};

export default Info;
