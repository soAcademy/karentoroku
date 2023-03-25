import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

import useMountedRef from "../hooks/useMountedRef";

//หลังบ้านให้ใช้ findmany where and มี 4 เงื่อนไข job and start time and location

const defaultMeetings = [
  {
    id: 1,
    name: "Durward Reynolds",
    job: "a",
    date: "2015-01-01",
    availableTime: "12.00",
    location: "Bangkok",
  },
  {
    id: 2,
    name: "Kenton Towne",
    job: "b",
    date: "2015-01-01",
    availableTime: "13.00",
    location: "Saraburi",
  },
  {
    id: 3,
    name: "Therese Wunsch",
    job: "c",
    date: "2015-01-02",
    availableTime: "14.00",
    location: "Online",
  },
];

const mockResponse = [
  {
    id: 1,
    name: "Durward Reynolds",
    job: "a",
    date: "2015-01-03",
    availableTime: "12.00",
    location: "Bangkok",
  },
  {
    id: 2,
    name: "Kenton Towne",
    job: "b",
    date: "2015-01-05",
    availableTime: "13.00",
    location: "Saraburi",
  },
  {
    id: 3,
    name: "Therese Wunsch",
    job: "c",
    date: "2015-01-07",
    availableTime: "14.00",
    location: "Online",
  },
];

const Dashboard = () => {
  const mountedRef = useMountedRef();
  const [meetings, setMeetings] = useState(defaultMeetings);
  const [job, setJob] = useState("All jobs");
  const [time, setTime] = useState("All day");
  const [location, setLocation] = useState("All location");

  const getMeetingsGroupByDate = useMemo(
    () => _.groupBy(meetings, (meeting) => meeting.date),
    [meetings]
  );

  const searchMeetings = () => {
    // call service send job time location
    // axios({
    //   url: `https://reqres.in/api/users?page=2`,
    //   params: {
    //     job,
    //     time,
    //     location,
    //   },
    // }).then((res) => {
    setMeetings(mockResponse);
    // });
  };

  useEffect(() => {
    // block execution when on mounted
    if (mountedRef.current) {
      console.log("job time location changed");
      console.log(job, time, location);
      searchMeetings();
    }
    // when select changed
  }, [mountedRef, job, time, location]);

  const groupByDate = getMeetingsGroupByDate;
  console.log("groupByDate", groupByDate);
  return (
    <>
      <div className="text-xl font-bold">KARENTOROKU BOARD</div>
      <div>
        <form className="mx-auto mt-8 w-full bg-orange-200 p-6">
          <div className="flex flex-wrap gap-2">
            <div className="w-1/4">
              <select
                className="mt-2 w-full p-2 pb-3"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              >
                <option>All Job</option>
                {meetings?.map((r, idx) => (
                  <option key={idx} value={r.job}>
                    {r.job}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/4">
              <select
                className="mt-2 w-full p-2 pb-3"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                <option>All Time</option>
                <option>8.00 - 12.00</option>
                <option>13.00 - 18.00</option>
              </select>
            </div>
            <div className="w-1/4">
              <select
                className="mt-2 w-full p-2 pb-3"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option>All Location</option>
                {meetings?.map((r, idx) => (
                  <option key={idx} value={r.location}>
                    {r.location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
        {/* <!-- component --> */}
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div className="inline-block min-w-full py-2 sm:px-2 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b bg-gray-200">
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-4 text-left text-sm font-medium text-gray-900"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 text-left text-sm font-medium text-gray-900"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 text-left text-sm font-medium text-gray-900"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 text-left text-sm font-medium text-gray-900"
                      >
                        Job
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-4 text-left text-sm font-medium text-gray-900"
                      >
                        Available Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {_.map(groupByDate, (dateMeetings, date) => {
                      return (
                        <>
                          <tr
                            key={date}
                            className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
                          >
                            <td colSpan={5}>{date}</td>
                          </tr>
                          {_.map(dateMeetings, (dateMeeting, i) => (
                            <tr
                              key={i}
                              className="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100"
                            >
                              <td className="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-900">
                                {i + 1}
                              </td>
                              <td className="whitespace-nowrap px-2 py-4 text-sm font-light text-gray-900">
                                {dateMeeting.name}
                              </td>
                              <td className="whitespace-nowrap px-2 py-4 text-sm font-light text-gray-900">
                                {dateMeeting.location}
                              </td>
                              <td className="whitespace-nowrap px-2 py-4 text-sm font-light text-gray-900">
                                {dateMeeting.job}
                              </td>
                              <td className="whitespace-nowrap px-2 py-4 text-sm font-light text-gray-900">
                                {dateMeeting.availableTime}
                              </td>
                            </tr>
                          ))}
                        </>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
