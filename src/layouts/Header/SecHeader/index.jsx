import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const SecHeader = ({ Logo, dropdownItem }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-white fixed-top" id="banner">
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand" to="/">
          <div>
            <img draggable="false" src={Logo} alt="logo" />
            <span
              style={{
                marginLeft: "5px",
                fontWeight: "500",
                letterSpacing: "1.1px",
              }}
            >
              AltCoinsMoney
            </span>
          </div>
        </Link>
        {/* Toggler/collapsibe Button */}
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/buy">
                Buy
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Products
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                {dropdownItem &&
                  dropdownItem.map((item, key) => (
                    <NavLink key={key} className="dropdown-item" to={item.path}>
                      {item.nameLink}
                    </NavLink>
                  ))}
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/roadmap">
                Roadmap
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactus">
                Contact Us
              </NavLink>
            </li>
            {/* {MenuInfo && MenuInfo.map((item , key) => (
                <li className="nav-item" key={key}>
                  <a className="nav-link" href={item.path}>{item.nameLink}</a>
                </li>
              ))} */}
            <li className="lh-55px">
              <Link
                to="https://altcoinsmoney.gitbook.io/altcoinsmoney/"
                target="_blank"
                rel=""
                className="btn login-btn ml-50"
              >
                Whitepaper
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SecHeader;
