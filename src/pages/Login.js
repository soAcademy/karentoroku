import React from "react";
import Logo from "../components/img/logocolor.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="mt-20 w-full">
        <div className="flex items-center justify-center">
          <div>
            <img src={Logo} alt="Company Logo" className="w-48 bg-white" />
          </div>
          <h1 className="text-4xl font-bold">KARENTOROKU</h1>
        </div>
        <div className="p-3 text-center text-2xl">
          Log into your Karentoroku account
        </div>
      </div>
      <div className="mx-auto mt-20 w-4/5 rounded-xl bg-gray-100 p-4">
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
        <div className="mt-20 flex">
          <div>Don't have an account?</div>
          <Link to="/getStart" className="ml-2 text-blue-600">
            Sign up
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
