import React from "react";
import Logo from "../components/img/logocolor.png"

const GetStart = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
        <img src={Logo} alt="Company Logo" className="w-48 bg-white" />
        </div>
        <h1 className="font-bold text-3xl">KARENTOROKU</h1>
      </div>
    </>
  );
};

export default GetStart;
