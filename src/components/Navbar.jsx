import navLogo from "../img/logo.png";
import categoryData from "../data/data.json";
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
      <Link to="/"><img src={navLogo} alt="logo" /></Link>

      </div>
      <ul className="navbar__content">
        {categoryData.categories.map((category) => {
          return (
            <li className="navbar__section-link">
              <Link to={category}>{category}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
