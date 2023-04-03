import React, { useEffect, useState } from "react";
import UserNavbar from "../components/navbar/UserNavbar";
import { useNavigate } from "react-router-dom";


const EventType = () => {
  const [eventName, setEventName] = useState("Event Name");
  const [location, setLocation] = useState("No location given");
  const [description, setDescription] = useState()

  useEffect(() => {
    localStorage.setItem("EventData", JSON.stringify());
  }, []);

  let navigate = useNavigate();
  const submitData = (e) => {
    e.preventDefault();
    const data = {
      EventName: e.target[0].value,
      Location: e.target[1].value,
      Description: e.target[2].value,
    };
    console.log(data);
    localStorage.setItem("EventData", JSON.stringify(data));
    navigate("/EventTypeP2");
  };

  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <div className="border-b-[1px] border-black py-5 text-center text-2xl">
        Add New Event Type
      </div>
      <form onSubmit={(e) => submitData(e)}>
        <div className="mt-3 ml-5">
          <p className="text-base">What event is this?</p>
          <p className="text-sm text-gray-400">
            {eventName}, {location}
          </p>
        </div>
        <div className="mx-5 mt-7 flex flex-col gap-3">
          <label className="text-lg">Event name</label>
          <input
            id="eventName"
            placeholder="Meeting"
            className="rounded-xl border-2 border-gray-400 bg-white p-3 text-lg"
            onChange={(e) => setEventName(e.target.value)}
          />
          <label className="text-lg">Location</label>
          <input
            id="location"
            placeholder="MS Team, Zoom, Google Meet"
            className="rounded-xl border-2 border-gray-400 bg-white p-3 text-lg"
            onChange={(e) => setLocation(e.target.value)}
          />
          <label className="text-lg">Description/Instructions</label>
          <textarea
            id="description"
            placeholder="This is a book"
            rows="8"
            className="rounded-xl border-2 border-gray-400"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className=" mt-14 flex flex-col items-center justify-center gap-5 py-5 text-center">
          <button
            type="submit"
            className="rounded-2xl border-2 bg-orange-700 py-3 px-20 text-lg text-white"
          >
            Next
          </button>
          <button className="rounded-2xl border-2 py-3 px-20 text-lg">
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

export default EventType;
