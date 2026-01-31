const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Back-end Developer</h3>
      {/* HTML */}
      <div className="skills__grid">
          <div className="skills__data">
            <i class="bx bxl-python icon"></i>

            <div>
              <h3 className="skills__name">Python</h3>
            </div>
          </div>

          <div className="skills__data">
            <i class='bx bxl-django icon'></i>  

            <div>
              <h3 className="skills__name">Django</h3>
            </div>
          </div>

          {/* Mysql */}
          <div className="skills__data">
            <i class="bx bx-data icon"></i>

            <div>
              <h3 className="skills__name">MySql</h3>
            </div>
          </div>
          <div className="skills__data">
            <i class='bx bxl-postgresql icon'></i> 

            <div>
              <h3 className="skills__name">PostgreSql</h3>
            </div>
          </div>

          {/* Java */}
          <div className="skills__data">
            <i class='bx bxl-java icon'></i> 

            <div>
              <h3 className="skills__name">Java</h3>
            </div>
          </div>

        {/* Docker */}
          <div className="skills__data">
            <i class='bx bxl-docker icon'></i> 

            <div>
              <h3 className="skills__name">Docker</h3>
            </div>
          </div>

          {/* Node */}
          <div className="skills__data">
            <i class="bx bxl-nodejs icon"></i>

            <div>
              <h3 className="skills__name">NodeJs</h3>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Backend;
