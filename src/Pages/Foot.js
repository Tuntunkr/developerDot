import React from "react";
import "../styles/Footers.css";
import logo from "../assets/LogoFooter.svg";

function Foot() {
  return (
    <>
      <footer class="footer">
        <div class="container">
          <div class="row">
            <div className="col">
              <img className="footimg" src={logo} alt="" />
            </div>
            <div class="footer-col">
              <h4>About</h4>
            </div>
            <div class="footer-col">
              <h4>Contact</h4>
            </div>
            <div class="footer-col">
              <h4>Privacy Policy</h4>
            </div>
            <div class="footer-col">
              <div class="social-links">
                <a href="/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i class="fab fa-telegram"></i>
                </a>
              </div>
            </div>
            <div class="footer-col">
              <h6>All rights reserved</h6>
            </div>
            <div class="footer-col">
              <h6>Copyright 2022</h6>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Foot;
