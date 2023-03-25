import React from "react";
import Navbar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const UserGroupSetting = () => {
  let navigate = useNavigate()

  const userDashboard = () => {
    navigate('/Dashboard')
  }

  const groupConfirm = () => {
    navigate('/UserGroupConfirm')
  }

  return (
    <>
      <Navbar />
      <div className=" mt-3 border-t-[1px] border-gray-500">
        <div className="py-5 text-center text-2xl">
          KARENTOROKU GROUPING MANAGMENT
        </div>
      </div>
      <div className="space-y-3 p-4">
        <div>
          <label className="text-xl font-semibold" for="event-name">
            Event Name
            <br />
            <input
              className=" mt-3 w-full rounded-xl py-3 text-xl"
              id="event-name"
              name="event-name"
              type="text"
              required
            />
          </label>
        </div>
        <div>
          <label className="text-xl font-semibold" for="calendar">
            Calendar
            <br />
            <input
              className=" mt-3 w-full rounded-xl py-3 text-xl"
              id="calendar"
              name="calendar"
              type="date"
              required
            />
          </label>
        </div>
        <div className="flex justify-between">
          <div>
            <label className="text-xl font-semibold" for="time">
              Time
              <br />
              <div className="flex items-center space-x-4">
                <input
                  className=" mt-3 w-24 rounded-xl py-3 text-xl"
                  id="Time"
                  name="Time"
                  type="text"
                  required
                />
                <p className="text-md">-</p>
                <input
                  className=" mt-3 w-24 rounded-xl py-3 text-xl"
                  id="Time"
                  name="Time"
                  type="text"
                  required
                />
              </div>
            </label>
          </div>
          <div className="flex flex-col">
            <p className="text-lg">Time zone</p>
            <p className="pl-3 text-sm text-gray-400">Bangkok (UTC+7)</p>
          </div>
        </div>
        <div>
          <label className="text-xl font-semibold" for="location">
            Location
            <br />
            <input
              className=" mt-3 w-full rounded-xl py-3 text-xl"
              id="location"
              name="location"
              type="text"
              required
            />
          </label>
        </div>
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
            <p className="text-green-400 text-lg">available</p>
            <p className="text-base">detail</p>
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
            <p className="text-green-400 text-lg">available</p>
            <p className="text-base">detail</p>
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
            <p className="text-green-400 text-lg">available</p>
            <p className="text-base">detail</p>
          </div>
        </div>
      </div>
      <div className="py-5">
      <button
      onClick={groupConfirm}
        className="mt-5 text-center border-2 border-orange-700 text-xl text-white py-3 px-40 items-center bg-orange-700 rounded-full mx-auto flex"
        >
          Continue
        </button>
        <button
        onClick={userDashboard}
        className="mt-5 text-center border-2 text-xl py-3 px-40 items-center bg-gray-400 rounded-full mx-auto flex"
        >
          Add more user
        </button>
        </div>
    </>
  );
};

export default UserGroupSetting;
