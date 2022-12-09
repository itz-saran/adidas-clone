import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Footer.css";

export class Footer extends Component {
  render() {
    return (
      <>
        <footer className="main-footer f-regular">
          <div className="link-container flex">
            <div className="footer-item">
              <h3 className="f-bold-pro">PRODUCTS</h3>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="/">Footwear</Link>
                  </li>
                  <li>
                    <Link to="/">Clothing</Link>
                  </li>
                  <li>
                    <Link to="/">Accessories</Link>
                  </li>
                  <li>
                    <Link to="/">Outlet - Sale</Link>
                  </li>
                  <li>
                    <Link to="/">New Arrivals</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-item">
              <h3 className="f-bold-pro">SPORTS</h3>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="/">Running</Link>
                  </li>
                  <li>
                    <Link to="/">Football</Link>
                  </li>
                  <li>
                    <Link to="/">Gym/Training</Link>
                  </li>
                  <li>
                    <Link to="/">Tennis</Link>
                  </li>
                  <li>
                    <Link to="/">Outdoor</Link>
                  </li>
                  <li>
                    <Link to="/">Basketball</Link>
                  </li>
                  <li>
                    <Link to="/">Swimming</Link>
                  </li>
                  <li>
                    <Link to="/">Skateboarding</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-item">
              <h3 className="f-bold-pro">COLLECTIONS</h3>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="/">Ultraboost</Link>
                  </li>
                  <li>
                    <Link to="/">Superstar</Link>
                  </li>
                  <li>
                    <Link to="/">NMD</Link>
                  </li>
                  <li>
                    <Link to="/">Stan Smith</Link>
                  </li>
                  <li>
                    <Link to="/">Sustainability</Link>
                  </li>
                  <li>
                    <Link to="/">Predator</Link>
                  </li>
                  <li>
                    <Link to="/">Parley</Link>
                  </li>
                  <li>
                    <Link to="/">adicolor</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-item">
              <h3 className="f-bold-pro">SUPPORT</h3>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="/">Help</Link>
                  </li>
                  <li>
                    <Link to="/">Customer Services</Link>
                  </li>
                  <li>
                    <Link to="/">Returns & Exchanges</Link>
                  </li>
                  <li>
                    <Link to="/">Shipping</Link>
                  </li>
                  <li>
                    <Link to="/">Order Tracker</Link>
                  </li>
                  <li>
                    <Link to="/">Store Locator</Link>
                  </li>
                  <li>
                    <Link to="/">Running Shoe Finder</Link>
                  </li>
                  <li>
                    <Link to="/">Bra Fit Guide</Link>
                  </li>
                  <li>
                    <Link to="/">adiclub</Link>
                  </li>
                  <li>
                    <Link to="/">adiclub Terms and Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-item">
              <h3 className="f-bold-pro">COMPANY INFO</h3>
              <div className="footer-links">
                <ul>
                  <li>
                    <Link to="/">About us</Link>
                  </li>
                  <li>
                    <Link to="/">adidas stories</Link>
                  </li>
                  <li>
                    <Link to="/">adidas Apps</Link>
                  </li>
                  <li>
                    <Link to="/">Entity details</Link>
                  </li>
                  <li>
                    <Link to="/">Press</Link>
                  </li>
                  <li>
                    <Link to="/">Careers</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-trademark">
            <div className="trademark-container flex-column">
              <div>
                <Link to="/">Privacy Policy</Link>
                <Link to="/">Terms and Conditions</Link>
                <Link to="/" className="no-border">
                  Cookies
                </Link>
              </div>
              <div className="copyright">
                ©2021 adidas India Marketing Pvt. Ltd
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
