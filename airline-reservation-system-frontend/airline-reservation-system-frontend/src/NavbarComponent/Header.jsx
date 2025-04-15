import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import RoleNav from "./RoleNav";

const Header = () => {
  return (
    <header className="bg-primary text-white">
      <nav className="navbar navbar-expand-lg navbar-light container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#fff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              width="40"
              height="40"
              className="d-inline-block"
              alt="Airline Logo"
            />
          </div>
          <span className="fw-bold fs-4 ms-2 text-white">
            Airline Reservation
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" className="nav-link text-light fw-semibold">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link text-light fw-semibold">
                Contact Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/view/flight/all"
                className="nav-link text-light fw-semibold"
              >
                View Flights
              </Link>
            </li>
          </ul>

          <RoleNav />
        </div>
      </nav>
    </header>
  );
};

export default Header;
