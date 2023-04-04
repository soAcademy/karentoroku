import React, { useState } from "react";
import UserNavbar from "../components/navbar/UserNavbar";
import dayjs from "dayjs";
import axios from "axios";
import SetWorkingHours_Events from "../components/SetWorkingHours_Event";

const EventTypeP2 = () => {
  const [duration, setDuration] = useState(30);
  const [days, setDays] = useState(60);
  const [price, setPrice] = useState(500);
  const [timeSlots, setTimeSlots] = useState([]);

  const arrayOfDate = [];
  const _data = JSON.parse(localStorage.getItem("EventData"));
  console.log("Event P1:", _data.EventName);

  const submitData = async (e) => {
    e.preventDefault();
    const data1 = {
      days: e.target[0].value,
      duration: e.target[1].value,
      price: e.target[2].value,
    };
    const newData = { ..._data, ...data1 };
    console.log("New Data:", newData);
    localStorage.setItem("EventData", JSON.stringify(newData));

    const days = timeSlots.map((timeSlot) => ({ dayName: timeSlot.day }));

    // const days = [{ dayName: "Saturday" }, { dayName: "Sunday" }];

    // const TimeSlots = [
    //   {
    //     day: "Saturday",
    //     timeSlot: [
    //       { startTime: 540, endTime: 600 },
    //       { startTime: 600, endTime: 660 },
    //     ],
    //   },
    //   {
    //     day: "Sunday",
    //     timeSlot: [
    //       { startTime: 100, endTime: 200 },
    //       { startTime: 200, endTime: 300 },
    //     ],
    //   },
    // ];

    // setTimeSlots(TimeSlots);

    const locationData = [
      {
        locationName: "Zoom",
      },
      {
        locationName: "Team",
      },
    ];

    const dateArray = () => {
      const today = dayjs();
      const dateArray = [];

      for (let i = 0; i < 60; i++) {
        const date = today.add(i, "day");
        dateArray.push(date);
      }
      console.log("Date Series:", dateArray);
      const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      // console.log('day:', dayjs('2023-04-03T16:12:17.871Z').day());

      const formattedData = dateArray.reduce((acc, date) => {
        const dayOfWeek = dayjs(date).day();
        const formattedDate = dayjs(date).format("YYYY-MM-DD");
        // console.log('Day Of Week:', dayOfWeek);
        // console.log('acc1', acc[dayOfWeek]);
        acc[dayOfWeek] = acc[dayOfWeek] || {
          day: weekdays[dayOfWeek],
          date: [],
        };
        // console.log('acc2', acc[dayOfWeek]);
        acc[dayOfWeek].date.push(formattedDate);
        // console.log('acc3', acc[dayOfWeek]);

        return acc;
      }, []);
      return formattedData;
    };
    const groupDate = dateArray();
    console.log("groupDate", groupDate);

    const groupDay = days.map((d) => {
      const findDate = groupDate
        .filter((r) => d.dayName === r.day)
        .map((b) => b.date)
        .flat();
      const findTime = timeSlots
        .filter((a) => d.dayName === a.day)
        .map((c) => c.timeSlot)
        .flat();
      return {
        name: newData.EventName,
        description: newData.Description,
        price: Number(newData.price),
        timeDuration: Number(newData.duration),
        userId: 1,
        days: [d],
        dates: findDate.map((date) => ({ date })),
        timeSlots: findTime,
        locations: locationData,
      };
    });
    console.log("Group Day:", groupDay);

    await Promise.all(
      groupDay.map(async (d) => {
        const data = JSON.stringify(d);

        const config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "http://localhost:8000/createEventType",
          headers: {
            "Content-Type": "application/json",
          },
          data: data,
        };

        axios
          .request(config)
          .then((response) => {
            console.log(JSON.stringify(response.data));
          })
          .catch((error) => {
            console.log(error);
          });
      })
    )
      .then(console.log)
      .catch(console.error);
  };

  return (
    <>
      <div>
        <UserNavbar />
      </div>
      <div className="border-b-[1px] border-black py-5 text-center text-2xl">
        Add New Event Type
      </div>
      <div className="mt-4 ml-5">
        <p className="text-base">What event is this?</p>
        <p className="text-sm text-gray-400">
          {_data.eventName}, {_data.location}
        </p>
      </div>
      <form onSubmit={(e) => submitData(e)}>
        <div className=" mx-4 mt-10 flex flex-col gap-y-5 border-2 border-gray-400">
          <div className="px-4">
            <p className="text-base">When can people book this event?</p>
            <p className="text-sm text-gray-400">
              {duration}min, {days} rolling calendar days, {price} Baht
            </p>
          </div>
          <div className="px-4">
            <p className="text-lg font-semibold">Date range</p>
            <p className="text-base text-gray-400">
              Set a range of dates when you can accept meetings
            </p>
          </div>
          <div className=" border-b-2 border-gray-400 px-4 pb-16">
            <p className="text-base font-semibold">Invitees can schedule...</p>
            <div className="flex items-center space-x-4">
              <input
                className=" mt-2 w-1/6 rounded-xl border-2 border-gray-400 py-2 pl-3 text-lg"
                placeholder="60"
                onChange={(e) => setDays(e.target.value)}
              />
              <span className="text-xl">calendar days</span>
            </div>
          </div>
          <span className="px-4 text-base text-gray-400">
            Define how long your event will be. It can be as long as 12 hours
          </span>
          <div className="flex flex-col gap-y-3">
            <label className="px-4 text-base font-semibold">Duration</label>
            <input
              className="mx-4 rounded-xl border-2 border-gray-400 py-2 pl-3 text-base"
              placeholder="30"
              onChange={(e) => setDuration(e.target.value)}
            />
            <label className="px-4 text-base font-semibold">Price</label>
            <input
              className="mx-4 rounded-xl border-2 border-gray-400 py-2 pl-3 text-base"
              placeholder="500 BHT"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-y-3">
            <span className="mt-14 px-4">
              How do you want to offer your availability for this event type?
            </span>
            <span className="px-4 text-gray-400">
              Select one of your schedules or define custom hours specific to
              this type of event.
            </span>
          </div>
          <button className=" mx-4 mt-2 w-1/2 rounded-xl border-2 border-gray-400 px-2 py-4 text-lg">
            Use an existing schedule
          </button>
          <button className=" mx-4 mt-2 w-1/3 rounded-xl border-2 border-gray-400 px-2 py-4 text-lg">
            Set custom hours
          </button>
          <div className="mx-4 mt-2">
            <SetWorkingHours_Events
              timeSlots={timeSlots}
              setTimeSlots={setTimeSlots}
            />
          </div>
          <div className=" mt-14 flex flex-col items-center justify-center gap-5 py-5 text-center">
            <button
              className="rounded-2xl border-2 bg-orange-700 py-3 px-20 text-lg text-white"
              type="submit"
            >
              Next
            </button>
            <button className="rounded-2xl border-2 py-3 px-20 text-lg">
              Cancel
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default EventTypeP2;
