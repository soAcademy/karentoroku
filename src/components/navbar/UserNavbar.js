import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logocolor.png";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const [open, setOpen] = useState(false);
  const [availability, setAvailability] = useState(false)

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  let navigate = useNavigate();
  const toHome = () => {
    navigate("/UserHomepage");
  };

  const logOut = () => {
    try {
      localStorage.clear();
      window.location.reload();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <>
      <nav className="mx-auto">
        <div className="flex items-center justify-between border-b-[1px] border-black px-2 py-3">
          <div className="flex cursor-pointer items-center space-x-5">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-20 bg-white"
              onClick={toHome}
            />
            <div className="text-xl font-bold md:hidden" onClick={toHome}>
              Home
            </div>
          </div>
          <div className="flex md:space-x-5 lg:space-x-8">
            <div className="hidden items-center md:flex md:space-x-5 lg:space-x-8">
              <div className="text-xl cursor-pointer font-bold" onClick={toHome}>
                Home
              </div>
              <Link
                to="/setAvailability"
                className="nav-links text-xl text-gray-400" onClick={setAvailability}
              >
                Availability
              </Link>
            </div>
            <div className="pr-5">
              <div onClick={handleOpen} className="cursor-pointer text-4xl">
                <BsPerson />
              </div>
            </div>
          </div>
        </div>

        {open && (
          <div>
            <div className="absolute flex w-full flex-col space-y-3 self-end bg-orange-100 py-8 pl-3 drop-shadow-2xl">
              <Link to="/aboutus" className="nav-links">
                Account Settings
              </Link>
              <Link to="/billing" className="nav-links">
                Billing
              </Link>
              <div className="md:hidden">
                <Link to="/setAvailability" className="nav-links">
                  Availability
                </Link>
              </div>
              <Link to="/mobileNumber" className="nav-links">
                Mobile Number
              </Link>
              <Link to="/subscription" className="nav-links">
                Subscription
              </Link>
              <Link to="/sharingYourLink" className="nav-links">
                Sharing Your Link
              </Link>
              <div>
                <button onClick={logOut}>Logout</button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default UserNavbar;
