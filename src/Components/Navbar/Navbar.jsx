import "./navbar.css";
import openIcon from "../../assets/images/icon-menu.svg";
import closeIcon from "../../assets/images/icon-menu-close.svg";
import logo from "../../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div id="navbar">
      <nav className="navbar" id="navbar-header">
        <header className="navbar-header">
          <a href="#" className="brand-link">
            <img src={logo} alt="logo" className="brand" />
          </a>
          <a href="#navbar-header" className="navbar-menu-mobile open">
            <img src={openIcon} alt="menu icon" />
          </a>
          <a href="#" className="navbar-menu-mobile close">
            <img src={closeIcon} alt="menu icon" />
          </a>
        </header>

        <ul className="navbar-container">
          <li className="navbar-item">
            <a href="#hero" className="navbar-link navbar-link-active">
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              New
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Popular
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Trending
            </a>
          </li>
          <li className="navbar-item">
            <a href="#" className="navbar-link">
              Categories
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
