import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Lucas</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre
            </a>
          </li>

          <li>
            <a href="#projects" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Habilidades
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/lucassv01/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>
          <a
            href="https://github.com/LuscasV"
            className="footer__social-link"
            target="_blank"
          >
            <i class="uil uil-github-alt"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/lucas-silva-valad%C3%A3o/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-linkedin-square"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Lucas Silva. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
