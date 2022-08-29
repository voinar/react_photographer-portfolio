import categoryData from "../data/data.json";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom'

import footerLogo from "../img/logo.png";
import iconFacebook from "../img/icons/icon-facebook.svg";
import iconInstagram from "../img/icons/icon-instagram.svg";
import chevronUp from "../img/icons/chevron-up.svg";

const Footer = () => {
  let { category } = useParams()
  console.log(category)
  
  const returnToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__column">
          <div className="footer__logo">
            <img src={footerLogo} />
          </div>
          <div className="footer__social">
            <span>Znajdź mnie na</span>
            <div className="footer__icon">
              <img src={iconFacebook} />
            </div>
            <div className="footer__icon">
              <img src={iconInstagram} />
            </div>
          </div>
        </div>
        <div className="footer__column">
          <div>sport</div>
          <div>emocje</div>
          <div>pejzaż</div>
          <div>dron</div>
        </div>
        <div className="footer__column">
          <div>o mnie</div>
        </div>
        <div className="footer__column">
          <div>kontakt</div>
        </div>
        <div className="footer__column">
          <div>sklep</div>
        </div>
        <div className="footer__column">
          <img
            className="footer__return-to-top"
            src={chevronUp}
            alt="wróć do początku"
            onClick={returnToTop}
          />
        </div>
      </div>
      <div className="footer__copyright">
        <span>copyright Ⓒ 2022 Kacper Porada</span>
      </div>
    </footer>
  );
};

export default Footer;
