import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const value = useContext(ThemeContext);
  return (
    <>
      <div className="main-header">
        <div
          id="topbar"
          className={`d-flex align-items-center fixed-top ${value.theme}`}
        >
          <div className="container d-flex justify-content-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope" />{" "}
              <a href="mailto:contact@example.com">contact@example.com</a>
              <i className="bi bi-phone" /> +1 5589 55488 55
            </div>
            <div className="d-none d-lg-flex social-links align-items-center">
              <NavLink to="/" className="twitter">
                <i className="bi bi-twitter" />
              </NavLink>
              <NavLink to="/" className="facebook">
                <i className="bi bi-facebook" />
              </NavLink>
              <NavLink to="/" className="instagram">
                <i className="bi bi-instagram" />
              </NavLink>
              <NavLink to="/" className="linkedin">
                <i className="bi bi-linkedin" />
              </NavLink>
            </div>
          </div>
        </div>
        <header id="header" className="fixed-top">
          <div className="container d-flex align-items-center">
            <div className="logo me-auto">
              <NavLink to="/">
                <h1 className="logo me-auto">City</h1>
                <br />
                <h2 className="logo-tiny-text me-auto">
                  Multispeciality Hospital
                </h2>
              </NavLink>
            </div>
            <nav id="navbar" className="navbar order-last order-lg-0">
              <ul>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link scrollto"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link scrollto"
                    to="/departments"
                  >
                    Departments
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link scrollto"
                    to="/doctors"
                  >
                    Doctors
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link scrollto"
                    to="/medicine"
                  >
                    Medicine
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link scrollto"
                    to="/about"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    activeClassName="active"
                    className="nav-link scrollto"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
              <i className="bi bi-list mobile-nav-toggle" />
            </nav>
            <NavLink
              to="/book-appointment"
              exact
              activeClassName="active"
              className="appointment-btn scrollto"
            >
              <span className="d-none d-md-inline">Make an</span> Appointment
            </NavLink>
            <NavLink
              to="/login"
              exact
              activeClassName="active"
              className="d-none d-md-inline appointment-btn scrollto"
            >
              <span>Login/ Signup</span>
            </NavLink>
            <button onClick={() => value.toggleTheme(value.theme)}>
              Change Mode
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
