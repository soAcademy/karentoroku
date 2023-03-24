import React from "react";
import Navbar from "../components/navbar/Navbar";

const UserGroupConfirm = () => {
  return (
    <>
      <Navbar />
      <div className=" mt-3 border-t-[1px] border-gray-500">
        <div className="py-5 text-center text-2xl">
          KARENTOROKU GROUPING MANAGMENT
        </div>
      </div>
      <div>
        <div className=" mt-10 flex flex-col space-y-3 mx-auto items-center">
          <p className="text-4xl font-bold text-orange-700">Special Interview</p>
          <p className="text-2xl text-orange-700">23 March 2023 (THU)</p>
          <p className="text-2xl text-orange-700">10:00 - 11:00</p>
          <p className="text-xl">SHERATON GRANDE HOTEL</p>
        </div>
      </div>
      <div className="ml-5 mt-20">
        <p className="text-xl font-semibold">Time zone</p>
        <p className="text-gray-400 pl-2">Bangkok (UTC+7)</p>
      </div>
      <div className="mt-10 border-t-[1px] border-gray-400">
        <div className="flex justify-between border-b-[1px] border-gray-400 p-4">
          <div className="flex items-center space-x-7">
            <input className="" type="checkbox" />
            <div className=" h-16 w-16 rounded-full border-[1px] border-gray-400 text-center bg-gray-300">
              Pic
            </div>
            <div className="flex flex-col">
              <p className="text-xl">John Wick</p>
              <p className="text-base text-orange-700">Actor</p>
            </div>
          </div>
          <div>
            <p className="text-red-700 text-xl">1000 BHT</p>
          </div>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-400 p-4">
          <div className="flex items-center space-x-7">
            <input className="" type="checkbox" />
            <div className=" h-16 w-16 rounded-full border-[1px] border-gray-400 text-center bg-gray-300">
              Pic
            </div>
            <div className="flex flex-col">
              <p className="text-xl">Taylor Swift</p>
              <p className="text-base text-orange-700">Singer</p>
            </div>
          </div>
          <div>
          <p className="text-red-700 text-xl">2000 BHT</p>
          </div>
        </div>
        <div className="flex justify-between border-b-[1px] border-gray-400 p-4">
          <div className="flex items-center space-x-7">
            <input className="" type="checkbox" />
            <div className=" h-16 w-16 rounded-full border-[1px] border-gray-400 text-center bg-gray-300">
              Pic
            </div>
            <div className="flex flex-col">
              <p className="text-xl">JSheraton Grande</p>
              <p className="text-base text-orange-700">Hotel</p>
            </div>
          </div>
          <div>
          <p className="text-red-700 text-xl">2000 BHT</p>
          </div>
        </div>
        <div className="py-7 px-4  flex space-x-44 justify-end text-xl border-b-[1px] border-gray-400">
          <span>TOTAL</span>
          <span className="text-red-700">5000 BHT</span>
        </div>
      </div>
      <button
        className="mt-10 text-center border-2 border-orange-700 text-xl text-white py-3 px-40 items-center bg-orange-700 rounded-full mx-auto flex"
        >
          Confirm
        </button>
    </>
  );
};

export default UserGroupConfirm;
