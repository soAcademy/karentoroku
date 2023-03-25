import React, { useState, useEffect } from "react";
import Logo from "../components/img/logocolor.png";
import { Link } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { auth, provider } from "../components/auth/config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserPassLogin = () => {
  const [toggle, setToggle] = useState(false);
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
          <div className="mt-10 flex items-center justify-center space-x-5">
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
            Sign up with Karentoroku for free
          </div>
          <div className="mx-7 mt-10 flex flex-col gap-4 rounded-2xl border-[1px] border-gray-500 px-10 py-10">
            <label className="text-xl">Enter your email to get started.</label>
            <input
              type="email"
              name="email"
              className="w-full rounded-xl border-2 border-orange-700 p-5 text-xl"
              placeholder="email address"
            />
            <label className="text-xl">Enter your full name.</label>
            <input
              type="text"
              name="name"
              className="w-full rounded-xl border-2 border-orange-700 p-5 text-xl"
              placeholder="John Doe"
            />
            <label className="text-xl">
              Choose a password with at least 8 characters..
            </label>
            <input
              type="password"
              name="password"
              className="w-full rounded-xl border-2 border-orange-700 p-5 text-xl"
              placeholder="password"
            />
            <span className="mt-10 text-xl text-red-600">
              • Use a few words, avoid common phases
            </span>
            <span className="text-xl text-red-600">
              • No need for symbols, digits, or uppercase letters
            </span>
            <button className="mt-5 w-full rounded-full bg-orange-700 p-5 text-xl text-white">
              Continue
            </button>
          </div>
    </>
  );
};

export default UserPassLogin;
