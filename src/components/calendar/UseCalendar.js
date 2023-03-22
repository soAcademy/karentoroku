import React, { useState } from "react";
import Calendar from "../../util/Calendar";
import CN from "../../util/CN";
import dayjs from "dayjs";
import Month from "../../util/Month";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const UseCalendar = () => {
  console.log("Generated Date:", Calendar());

  const days = ["S", "M", "T", "W", "T", "F", "S"];

  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate)

  return (
    // <div className="w1/2 mx-auto flex h-screen items-center justify-center gap-10 divide-x-2">
      <div>
      <div className="h-96 w-96">
        <div className="flex justify-between">
          <h1 className="font-semibold">
            {Month[today.month()]}, {today.year()}
          </h1>
          <div className="flex items-center gap-5">
            <GrFormPrevious
              className="h-5 w-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="cursor-pointer"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="h-5 w-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-7 text-gray-500">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="grid h-14 place-content-center text-sm"
              >
                {day}
              </h1>
            );
          })}
        </div>
        <div className="grid w-full grid-cols-7">
          {Calendar(today.month(), today.year()).map(
            ({ date, currentMonth, today }, index) => {
              return (
                <div
                  key={index}
                  className="grid h-14 place-content-center border-t text-sm"
                >
                  <h1
                    className={CN(
                      currentMonth ? "" : "text-gray-400",
                      today ? "bg-red-600 text-white" : "",
                      selectDate.toDate().toDateString() === date.toDate().toDateString() ? "bg-black text-white" : "",
                      "grid h-10 w-10 cursor-pointer place-content-center rounded-full transition-all hover:bg-black hover:text-white"
                    )}
                    onClick={() => {setSelectDate(date)}}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
      {/* <div className="h-96 w-96 px-5">
        <h1 className="font-semibold">Schedule for {selectDate.toDate().toDateString()}</h1>
        <p>No meetings for today</p>
      </div> */}
    </div>
  );
};

export default UseCalendar;
