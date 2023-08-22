import React, { useState } from "react";
import "./Navbar.css";
// import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navToggler, setNavToggler] = useState(false);
  const closeNavbar = () => setNavToggler(false);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="brand-and-toggler flex flex-sb">
            <Link
              to="/"
              className="navbar-brand text-uppercase fw-7 text-white ls-2 fs-22"
            >
              Bekbolot
            </Link>
            <button
              type="button"
              className="navbar-open-btn text-white"
              onClick={() => setNavToggler(!navToggler)}
            >
              <FaBars size={30} />
            </button>

            <div
              className={
                navToggler
                  ? "navbar-collapse show-navbar-collapse"
                  : "navbar-collapse"
              }
            >
              <button
                type="button"
                className="navbar-close-btn text-white"
                onClick={closeNavbar}
              >
                <FaTimes size={30} />
              </button>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/"
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                  >
                    Main
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                    activeClass="active"
                    to="test1"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                    activeClass="active"
                    to="Works"
                    spy={true}
                    smooth={true}
                    offset={50}
                    duration={500}
                  >
                    Works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                     className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                     activeClass="active"
                     to="About"
                     spy={true}
                     smooth={true}
                     offset={50}
                     duration={500}
                  >
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                     className="nav-link text-white ls-1 text-uppercase fw-6 fs-22"
                     activeClass="active"
                     to="footer"
                     spy={true}
                     smooth={true}
                     offset={50}
                     duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
