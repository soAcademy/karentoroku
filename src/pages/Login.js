import React, { useState, useEffect } from "react";
import Logo from "../components/img/logocolor.png";
import { Link } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { auth, provider } from "../components/auth/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [currentUser, setCurrentUser] = useState()

  const handleClick = async () => {
    try{
    signInWithPopup(auth, provider).then((data) => {
      setCurrentUser(data.user.email)
      localStorage.setItem("email", data.user.email);
    })
  }catch(error) {
    alert(error)
  }
  };

let navigate = useNavigate()
useEffect(() => {
  if (currentUser) {
    return navigate('/UserHomepage')
  }
},[currentUser])

  return (
    <>
          <div className="mt-20 w-full">
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
              Log into your Karentoroku account
            </div>
          </div>
          <div className="m-auto mt-20 rounded-xl bg-gray-100 p-4 sm:w-4/5 md:w-3/4 lg:w-1/2 2xl:w-2/6">
            <label className="mt-3">Enter your email to get started</label>
            <input
              type="email"
              name="email"
              className="mt-4 w-full rounded-xl p-3"
              placeholder="email address"
            />
            <button className="mt-5 w-full rounded-full bg-orange-700 p-5 text-xl text-white">
              Continue
            </button>
            <div className="mt-10 flex items-center justify-center">
              <GoogleButton onClick={handleClick} />
            </div>
            <div className="mt-20 flex">
              <div>Don't have an account?</div>
              <Link to="/GetStart" className="ml-2 text-blue-600">
                Sign up
              </Link>
            </div>
          </div>
    </>
  );
};

export default Login;
