import React from "react";
import Navbar from "../components/navbar/Navbar";

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <div className=" mt-3 border-t-[1px] border-gray-500">
        <div className="mx-4 flex items-center justify-between pt-5">
          <h1 className="text-xl">KARENTOROKU USER</h1>
          <button className="rounded-lg bg-gray-300 py-2 px-7 text-center text-base ">
            Group
          </button>
        </div>
        <div className=" my-10 w-36 h-36 border-2 bg-gray-200 flex mx-auto items-center text-center justify-center rounded-full">Pic</div>
        <div className="mx-2 bg-orange-100 rounded-md mt-5">
          <form className="flex flex-col space-y-3">
          <div className="p-4 flex flex-col space-y-2">
            <p className=" text-xl font-bold">Name:</p>
            <p className="text-lg">John Wick</p>
          </div>
          <div className="p-4 flex flex-col space-y-2">
            <p className=" text-xl font-bold">Occupation:</p>
            <p className="text-lg">Actor</p>
          </div>
          <div className="p-4 flex flex-col space-y-2">
            <p className=" text-xl font-bold">Education:</p>
            <p className="text-lg">Bachelor degree</p>
          </div>
          <div className="p-4 flex flex-col space-y-2">
            <p className=" text-xl font-bold">Review:</p>
          </div>
          </form>
        </div>
        <button
        className="mt-20 text-center border-2 border-orange-700 text-xl text-white py-3 px-40 items-center bg-orange-700 rounded-full mx-auto flex"
        >
          Event Calendar
        </button>
      </div>
    </>
  );
};

export default UserProfile;
