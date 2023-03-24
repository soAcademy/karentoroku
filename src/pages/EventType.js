import React from "react";
import UserNavbar from "../components/navbar/UserNavbar";

const EventType = () => {
  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <div className="border-b-[1px] border-black py-5 text-center text-2xl">
        Add New Event Type
      </div>
      <div className="mt-3 ml-5">
        <p className="text-base">What event is this?</p>
        <p className="text-sm text-gray-400">Event name, No location given</p>
      </div>
      <div className="mx-5 mt-7 flex flex-col gap-3">
        <label className="text-lg">Event name</label>
        <input className="rounded-xl border-2 border-gray-400 bg-white p-3 text-lg" />
        <label className="text-lg">Location</label>
        <input className="rounded-xl border-2 border-gray-400 bg-white p-3 text-lg" />
        <label className="text-lg">Description/Instructions</label>
        <textarea rows="8" className="rounded-xl border-2 border-gray-400" />
      </div>
      <div className=" mt-14 flex flex-col items-center justify-center gap-5 py-5 text-center">
        <button className="rounded-2xl border-2 bg-orange-700 py-3 px-20 text-lg text-white">
          Next
        </button>
        <button className="rounded-2xl border-2 py-3 px-20 text-lg">
          Cancel
        </button>
      </div>
    </>
  );
};

export default EventType;
