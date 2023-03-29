import React, {useState} from "react";
import UseCalendar from "../components/calendar/UseCalendar";

const CustomerBooking = () => {

  return (
    <>
      <div className="w-full">
        <div className="border-2 border-gray-400">
          <div className=" flex flex-col gap-2 items-center justify-center pt-5">
            <h1 className="text-xl text-gray-600 text-xl">Username</h1>
            <h1 className="text-4xl">Event Name</h1>
          </div>
          <div>
            <p className="pt-16 pl-16 pb-6 text-gray-600 text-xl">30 min</p>
          </div>
        </div>
        <div className="text-center text-3xl pt-6">
          Select a Day
        </div>
        <div className="my-10 flex justify-center items-center">
          <UseCalendar />
        </div>
        <div className="mt-16">
          <p className="pl-16 text-xl font-semibold">Time zone</p>
          <p className="pl-20 pb-5 text-gray-600">Bangkok (UTC+7)</p>
        </div>
      </div>
    </>
  );
};

export default CustomerBooking;
