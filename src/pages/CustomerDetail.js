import React from "react";
import { useNavigate } from "react-router-dom";

const CustomerBooking = () => {

  let navigate = useNavigate()
  const finalConfirm = () => {
    navigate('/CustomerFinalConfirm')
  }

  return (
    <>
      <div className="w-full">
        <div className="border-2 border-gray-400">
          <div className=" flex items-center justify-center pt-5">
            <h1 className="text-4xl">Event Name</h1>
          </div>
          <div className="flex flex-col gap-3 pt-10 pl-16 pb-10">
            <p className="text-xl text-gray-600">30 min</p>
            <p className="text-xl text-gray-600">Time, Date</p>
            <p className="text-xl text-gray-600">Time zone</p>
          </div>
        </div>
        <div className="mt-5 flex flex-col gap-5 px-5 ">
          <h3 className="text-2xl font-semibold ">Enter Detail</h3>
          <label className="text-xl">Name</label>
          <input className="rounded-lg border-2 border-gray-400 py-3 text-xl" />
          <label className="text-xl">Email</label>
          <input className="rounded-lg border-2 border-gray-400 py-3 text-xl" />
          <button className="rounded-lg border-2 border-orange-700 bg-white py-3 px-60 text-xl text-orange-700">
            Add Guests
          </button>
          <h4 className="text-xl">Please share anything that will help prepare for our meeting.</h4>
          <textarea 
          rows="5"
          />
           <button className="rounded-lg border-2 border-orange-700 bg-orange-700 py-3 px-60 text-xl text-white" onClick={finalConfirm}>
            Schedule Event
          </button>
        </div>
      </div>
    </>
  );
};

export default CustomerBooking;
