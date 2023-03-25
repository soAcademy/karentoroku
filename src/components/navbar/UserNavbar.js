import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logocolor.png";
import { BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const UserNavbar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };
  let navigate = useNavigate()
  const toHome = () => {
    navigate('/')
  }

  const logOut = () => {
    try {
    localStorage.clear()
    window.location.reload()
    }catch(error) {
      alert(error)
    }
  };

  return (
    <>
      <nav className="mx-auto">
        <div className="flex items-center justify-between border-b-[1px] border-black px-2 py-3">
          <div className="flex cursor-pointer items-center space-x-5">
            <img src={Logo} alt="Company Logo" className="w-20 bg-white" />
            <div className="text-xl" onClick={toHome}>Home</div>
          </div>
          <div className="hidden md:flex md:space-x-5 lg:space-x-8">
            <Link to="/aboutus" className="nav-links">
              Account Settings
            </Link>
            <Link to="/billing" className="nav-links">
              Billing
            </Link>
            <Link to="/availability" className="nav-links">
              Availability
            </Link>
            <Link to="/adminManagement" className="nav-links">
              Admin Management
            </Link>
            <Link to="/mobileNumber" className="nav-links">
              Mobile Number
            </Link>
            <Link to="/subscription" className="nav-links">
              Subscription
            </Link>
            <Link to="/sharingYourLink" className="nav-links">
              Sharing Your Link
            </Link>
          </div>
          <div className="pr-5 md:hidden">
            <div onClick={handleOpen} className="cursor-pointer text-4xl">
              <BsPerson />
            </div>
          </div>
        </div>

        {open && (
          <div>
            <div className="absolute flex w-full flex-col space-y-3 self-end bg-orange-100 py-8 pl-3 font-bold drop-shadow-2xl md:hidden">
              <Link to="/aboutus" className="nav-links">
                Account Settings
              </Link>
              <Link to="/billing" className="nav-links">
                Billing
              </Link>
              <Link to="/availability" className="nav-links">
                Availability
              </Link>
              <Link to="/adminManagement" className="nav-links">
                Admin Management
              </Link>
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
                <button
                onClick={logOut}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default UserNavbar;
