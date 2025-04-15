import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Airline Reservation System
            </h5>
            <p>
              Welcome to our Airline Reservation System, where seamless travel
              planning and exhilarating adventures meet. Embark on a journey of
              convenience as you navigate our user-friendly platform to explore
              an array of flights, destinations, and class options.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              About Us
            </h5>
            <p>
              <Link
                to="/about"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Who We Are
              </Link>
            </p>
            <p>
              <Link
                to="/ourteam"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Our Team
              </Link>
            </p>
            <p>
              <Link
                to="/careers"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Careers
              </Link>
            </p>
            <p>
              <Link
                to="/contact"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Contact Us
              </Link>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Support
            </h5>
            <p>
              <Link
                to="/help"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Help Center
              </Link>
            </p>
            <p>
              <Link
                to="/faq"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                FAQs
              </Link>
            </p>
            <p>
              <Link
                to="/privacy"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Privacy Policy
              </Link>
            </p>
            <p>
              <Link
                to="/terms"
                className="text-white"
                style={{ textDecoration: "none" }}
              >
                Terms of Service
              </Link>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold text-warning">
              Follow Us
            </h5>
            <p>
              <a href="https://facebook.com" className="text-white me-4">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="text-white me-4">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-white me-4">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-white me-4">
                <FaLinkedin />
              </a>
            </p>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-white">
              © 2024 Copyright:
              <a
                href="https://google.com/"
                className="text-warning"
                style={{ textDecoration: "none" }}
              >
                Suboy
              </a>
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <Link to="/user/login">
              <button
                type="button"
                className="btn btn-outline-light btn-rounded custom-bg-text"
              >
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
