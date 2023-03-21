import React from "react";
import UserNavbar from "../components/navbar/UserNavbar";
import { BsPersonCircle } from "react-icons/bs";

const UserHome = () => {
  return (
    <>
      <UserNavbar />
      <div>
        <div>
          <h4 className="py-7 pl-5 text-4xl">KARENTOROKU</h4>
        </div>
        <div className="mt-5 flex space-x-12 border-b-[2px] py-2 pl-5">
          <div>Event Types</div>
          <div>Scheduled Events</div>
        </div>
        <div className="flex items-center space-x-10 border-b-[2px] py-8 pl-5">
          <div className="text-7xl">
            <BsPersonCircle />
          </div>
          <div>
            <p>username</p>
            <p>karentoroku.com/username</p>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="border-gray my-3 mx-3 rounded-full border-2 py-5 px-40">
            <p className="text-xl">+ New Event Type</p>
          </button>
        </div>
        <div className="mx-3 mt-2 bg-orange-200 px-4 pt-4 pb-4">
          <p className="pt-4 text-3xl ">Meeting 30 min</p>
          <p className="pt-2 text-xl text-gray-400">30mins, One-on-One</p>
          <p className="pt-14 pb-6 text-xl text-orange-700">
            view booking page
          </p>
        </div>
        <div className="mx-3 mt-1 flex items-center justify-between bg-orange-200 px-20 py-2">
          <p className="text-xl text-orange-700">Copy link</p>
          <button className="rounded-full border-2 border-orange-700 bg-white py-2 px-10 text-xl">
            Share
          </button>
        </div>
      </div>
    </>
  );
};

export default UserHome;
