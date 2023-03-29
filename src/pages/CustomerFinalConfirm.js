import React, { useState } from "react";

const CustomerBooking = () => {


  return (
    <>
      <div className="w-full">
        <div className="border-2 border-gray-400">
          <div className=" flex items-center justify-center pt-5">
            <h1 className="text-3xl">Confirmed</h1>
          </div>
          <div className="flex flex-col gap-3 pt-10 pb-10 text-center">
            <p className="text-xl text-gray-600">
              You are scheduled with username{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 pl-10 mt-5">
          <p className="text-xl font-semibold">Event name</p>
          <p className="text-gray-500">Time, Date</p>
          <p className="text-gray-500">Time zone</p>
        </div>
        <p className="text-xl font-semibold pl-10 mt-8 pb-5 border-b-[2px]">A calendar invitation has been sent to your email address</p>
      </div>
    </>
  );
};

export default CustomerBooking;
