import { useState } from "react";
import "./header.css";

const Header = () => {
  /* =============== Change background header =============== */
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /* =============== Toggle menu =============== */
  const [showMenu, setShowMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Lucas
        </a>
        <div className={showMenu ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i>Sobre
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i>Habilidades
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                onClick={() => setActiveNav("#services")}
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-briefcase-alt nav__icon"></i>Serviços
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#projetos"
                onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i>Projetos
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i>Contato
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setShowMenu(!showMenu)}
          ></i>
        </div>

        <div
          className={showMenu ? "nav__toggle display-none" : "nav__toggle"}
          onClick={() => setShowMenu(!showMenu)}
        >
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
