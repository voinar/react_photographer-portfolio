import navLogo from "../img/logo.png";
import categoryData from "../data/data.json";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/witaj">
          <img src={navLogo} alt="logo" />
        </Link>
      </div>
      <ul className="navbar__content">
        {categoryData.categories.map((category) => {
          if (category === "galerie") {
            return (
              <ul className="navbar__section__dropdown">
                galeria
                {categoryData.dropdownCategories.map((dropdownCategory) => {
                  return (
                    <li
                      key={dropdownCategory}
                      className="navbar__section__dropdown-link"
                    >
                      <Link to={dropdownCategory}>{dropdownCategory}</Link>
                    </li>
                  );
                })}
              </ul>
            );
          }
          if (category !== "galerie") {
            return (
              <li key={category} className="navbar__section-link">
                <Link to={category}>{category}</Link>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
