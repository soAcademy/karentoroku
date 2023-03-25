import React from "react";
import UserNavbar from "../components/navbar/UserNavbar";

const EventConfirm = () => {
  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <div className="border-b-[1px] border-black py-5 text-center text-2xl">
        Confirm Event Type
      </div>
      <div className="flex flex-col space-y-3">
        <div className="mt-4 ml-5">
          <p className="text-base">What event is this?</p>
          <p className="text-sm text-gray-400">Event name, No location given</p>
        </div>
        <div className="mt-4 ml-5">
          <p className="text-base">When can people book this event?</p>
          <p className="text-sm text-gray-400">30 min, 60 rolling calendar days</p>
        </div>
      </div>
      <div className=" mt-10 text-center py-6 bg-gray-200 text-lg">
      Your booking page is ready to accept events.
      </div>
      <div className="flex justify-end space-x-7 items-center mt-24 mx-4">
        <span className="text-orange-700">view live page</span>
        <button
        className="text-xl text-center py-2 px-10 rounded-full text-white border-2 bg-orange-700"
        >
          Share
        </button>
      </div>
    </>
  );
};

export default EventConfirm;
