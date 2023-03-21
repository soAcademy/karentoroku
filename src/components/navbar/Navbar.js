import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logocolor.png";
import { GiHamburgerMenu } from "react-icons/gi";


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
      <nav className="mx-auto">
        <div className="mx-2 flex items-center justify-between">
          <div className="cursor-pointer">
            <img src={Logo} alt="Company Logo" className="w-48 bg-white" />
          </div>
          <div className="hidden md:flex md:space-x-5 lg:space-x-8">
            <Link to="/" className="nav-links">
              Home
            </Link>
            <Link to="/pricing" className="nav-links">
              Pricing
            </Link>
            <Link to="/pricing" className="nav-links">
              User Dashboard
            </Link>
            <Link to="/faq" className="nav-links">
              Faq
            </Link>
            <Link to="/about" className="nav-links">
              About Us
            </Link>
          </div>
          <div className="hidden space-x-4 md:flex">
            <Link to="login" className="nav-links">
              Login
            </Link>
            <Link to="/getStart" className="nav-links">
              <span className="rounded-md border-solid border-red-200 bg-orange-200 p-4">
                Get started
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-8 md:hidden">
            <Link to="/getStart" className="nav-links">
              <span className="rounded-md border-solid border-red-200 bg-orange-200 p-3">
                Get started
              </span>
            </Link>
            <div onClick={handleOpen} className="cursor-pointer text-5xl">
              <GiHamburgerMenu />
            </div>
          </div>
        </div>
        {open && (
          <div>
            <div className="absolute flex w-full flex-col space-y-3 self-end bg-orange-100 py-8 pl-3 font-bold drop-shadow-2xl md:hidden">
              <Link to="/" className="nav-links">
                Home
              </Link>
              <Link to="/pricing" className="nav-links">
                Pricing
              </Link>
              <Link to="/pricing" className="nav-links">
                User Dashboard
              </Link>
              <Link to="/faq" className="nav-links">
                Faq
              </Link>
              <Link to="/about" className="nav-links">
                About Us
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
