import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const CustomerBooking = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="w-full">
        <div onClick={handleOpen} className="cursor-pointer py-3 text-5xl">
          <GiHamburgerMenu />
        </div>
        <div className="border-2 border-gray-400">
          <div className=" flex flex-col items-center justify-center gap-2 pt-5">
            <h1 className="text-4xl font-semibold text-gray-600">
              Selected Date
            </h1>
            <h1 className="text-2xl text-gray-600">Month, date, year</h1>
          </div>
          <div>
            <p className="pt-16 pl-16 text-3xl font-semibold">Time zone</p>
            <p className="pl-20 pt-3 pb-10 text-gray-600">Bangkok (UTC=7)</p>
          </div>
        </div>
        <div className="flex flex-col gap-3 items-center justify-center">
        <div className="pt-6 text-3xl">Select a Time</div>
        <div className="text-gray-600 text-xl">Duration: 30 min</div>
        </div>
        <div className="text-center mt-14">
        <button
        className="px-64 py-5 border-2 border-orange-700 bg-white text-2xl rounded-lg"
        >
          9:30
        </button>
        </div>
      </div>
    </>
  );
};

export default CustomerBooking;
