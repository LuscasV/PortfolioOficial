const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Front-end Developer</h3>

      {/* HTML */}
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-html5 icon"></i>

            <div>
              <h3 className="skills__name">HTML</h3>
            </div>
          </div>
          {/* CSS */}
          <div className="skills__data">
            <i class="bx bxl-css3 icon"></i>

            <div>
              <h3 className="skills__name">CSS</h3>
            </div>
          </div>
          {/* JAVASCRIPT */}
          <div className="skills__data">
            <i class="bx bxl-javascript icon"></i>

            <div>
              <h3 className="skills__name">JavaScript</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-typescript icon"></i>

            <div>
              <h3 className="skills__name">TypeScript</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-jquery icon"></i>

            <div>
              <h3 className="skills__name">Jquery</h3>
            </div>
          </div>
        </div>

        {/* REACT */}
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bxl-react icon"></i>

            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>
          {/* BOOTSTRAP */}
          <div className="skills__data">
            <i class="bx bxl-bootstrap icon"></i>

            <div>
              <h3 className="skills__name">Bootstrap</h3>
            </div>
          </div>
          {/* Tailwind */}
          <div className="skills__data">
            <i class="bx bxl-tailwind-css icon"></i>

            <div>
              <h3 className="skills__name">Tailwind</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-git icon"></i>

            <div>
              <h3 className="skills__name">Git</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class="bx bxl-sass icon"></i>

            <div>
              <h3 className="skills__name">Sass</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
