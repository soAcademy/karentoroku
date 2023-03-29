import React, { useState, useEffect } from "react";
import Logo from "../components/img/logocolor.png";
import { Link } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { auth, provider } from "../components/auth/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const GetStart = () => {
  const [currentUser, setCurrentUser] = useState();
  const [toggle, setToggle] = useState(false);
  const [email, setEmail] = useState('')

  const handleClick = async () => {
    try {
      signInWithPopup(auth, provider).then((data) => {
        setCurrentUser(data.user.email);
        localStorage.setItem("email", data.user.email);
      });
    } catch (error) {
      alert(error);
    }
  };

  let navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      return navigate("/UserHomepage");
    }
  }, [currentUser]);

  const userPass = () => {
    navigate('/UserPassLogin')
  }

  return (
    <>
      {toggle ? (
        <>
          <div className="mt-40 flex items-center justify-center space-x-5">
            <div>
              <Link to="/">
                <img src={Logo} alt="Company Logo" className="w-20 bg-white" />
              </Link>
            </div>
            <Link to="/">
              <h1 className="text-4xl font-bold">KARENTOROKU</h1>
            </Link>
          </div>
          <div className="mt-14 flex items-center justify-center text-3xl">
            Hi,{"  "}{email}!
          </div>
          <div className="mx-20 mt-10 rounded-2xl border-[1px] border-gray-500 py-8 px-5 text-xl">
            <div>
              The easiest way for you to sign up is with Google. This will
              automatically connect your calendar so you can start using
              Karentoroku right way!
            </div>
            <div className="mx-auto mt-5 flex justify-center">
              <GoogleButton onClick={handleClick} />
            </div>
            <div className="mt-6 space-x-3">
              <span>Prefer to create an account with a password?</span>
              <span
                className="cursor-pointer text-blue-600"
                onClick={userPass}
              >
                Click here
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="m-auto mt-20">
            <div className="flex items-center justify-center space-x-3">
              <div>
                <Link to="/">
                  <img
                    src={Logo}
                    alt="Company Logo"
                    className="w-20 bg-white"
                  />
                </Link>
              </div>
              <Link to="/">
                <h1 className="text-4xl font-bold">KARENTOROKU</h1>
              </Link>
            </div>
            <div className="p-3 text-center text-2xl">
              Sign up with Karentoroku for free
            </div>
          </div>
          <div className="m-auto mt-20 rounded-xl bg-gray-100 p-4 sm:w-4/5 md:w-3/4 lg:w-1/2 2xl:w-2/6">
            <label className="mt-3">Enter your email to get started</label>
            <input
              type="email"
              name="email"
              className="mt-4 w-full rounded-xl p-3"
              placeholder="email address"
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="mt-5 w-full rounded-full bg-orange-700 p-5 text-xl text-white"
              onClick={() => setToggle(true)}
            >
              Get Started
            </button>
            <div className="mx-auto mt-10 flex justify-center">
              <GoogleButton onClick={handleClick} />
            </div>
            <div className="mt-20 flex">
              <div>Already have an account?</div>
              <Link to="/Login" className="ml-2 text-blue-600">
                Login
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default GetStart;
