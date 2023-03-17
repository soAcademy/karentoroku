import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logocolor.png";
import Hamburger from "../icon/Hamburger";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <nav className="container relative mx-auto">
        <div className="flex items-center justify-between">
          <div className="cursor-pointer pt-2">
            <img src={Logo} alt="Company Logo" className="w-48 bg-white" />
          </div>
          <div className="hidden space-x-8 md:flex">
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/pricing" className="nav-links">
              Pricing
            </Link>
            <Link to="/faq" className="nav-links">
              Faq
            </Link>
            <Link to="/about" className="nav-links">
              About Us
            </Link>
            <Link to="/login" className="nav-links">
              Login
            </Link>
            <Link to="/getstart" className="nav-links">
              Get Started
            </Link>
          </div>
          <button id="menu-btn" onClick={handleOpen} className="block md:hidden">
            <Hamburger />
          </button>
        </div>
        {open && (
          <div>
            <div className="absolute flex w-full flex-col space-y-3 self-end bg-red-100 py-8 pl-3 font-bold drop-shadow-2xl">
              <Link to="/" className="nav-links">
                Home
              </Link>
              <Link to="/pricing" className="nav-links">
                Pricing
              </Link>
              <Link to="/faq" className="nav-links">
                Faq
              </Link>
              <Link to="/about" className="nav-links">
                About Us
              </Link>
              <Link to="/login" className="nav-links">
                Login
              </Link>
              <Link to="/getstart" className="nav-links">
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
