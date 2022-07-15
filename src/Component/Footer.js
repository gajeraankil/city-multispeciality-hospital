import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-contact">
                <div className="logo me-auto">
                  <NavLink to="/">
                    <h1 className="logo me-auto">City</h1>
                    <br />
                    <h2 className="logo-tiny-text me-auto">
                      Multispeciality Hospital
                    </h2>
                  </NavLink>
                </div>
                <div className="clearfix"></div>
                <p>
                  A108 Adam Street <br />
                  New York, NY 535022
                  <br />
                  United States <br />
                  <br />
                  <strong>Phone:</strong> +1 5589 55488 55
                  <br />
                  <strong>Email:</strong> info@example.com
                  <br />
                </p>
              </div>
              <div className="col-lg-2 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <NavLink to="/about">About us</NavLink>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <NavLink to="/">Services</NavLink>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <NavLink to="/">Terms of service</NavLink>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <NavLink to="/">Privacy policy</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Our Services</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <NavLink to="/">Web Design</NavLink>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <NavLink to="/">Web Development</NavLink>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <NavLink to="/">Product Management</NavLink>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <NavLink to="/">Marketing</NavLink>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right" />{" "}
                    <NavLink to="/">Graphic Design</NavLink>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6 footer-newsletter">
                <h4>Join Our Newsletter</h4>
                <p>
                  Tamen quem nulla quae legam multos aute sint culpa legam
                  noster magna
                </p>
                <form action="" method="post">
                  <input type="email" name="email" />
                  <input type="submit" defaultValue="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container d-md-flex py-4">
          <div className="me-md-auto text-center text-md-start">
            <div className="copyright">
              © Copyright{" "}
              <strong>
                <span>City Multispeciality Hospital</span>
              </strong>
              . All Rights Reserved
            </div>
            <div className="credits">
              Designed by <NavLink to="/">Ankil Gajera</NavLink>
            </div>
          </div>
          <div className="social-links text-center text-md-right pt-3 pt-md-0">
            <NavLink to="/" className="twitter">
              <i className="bx bxl-twitter" />
            </NavLink>
            <NavLink to="/" className="facebook">
              <i className="bx bxl-facebook" />
            </NavLink>
            <NavLink to="/" className="instagram">
              <i className="bx bxl-instagram" />
            </NavLink>
            <NavLink to="/" className="google-plus">
              <i className="bx bxl-skype" />
            </NavLink>
            <NavLink to="/" className="linkedin">
              <i className="bx bxl-linkedin" />
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
