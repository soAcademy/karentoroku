import React, { useMemo } from "react";
import { useState, useEffect } from "react";
import _ from "lodash";
import Navbar from "../components/navbar/Navbar";
import UserGroupSetting from "./UserGroupSetting";
import { useNavigate } from "react-router-dom";

//หลังบ้านให้ใช้ findmany where and มี 4 เงื่อนไข job and start time and location

const defaultMeetings = [
  // name from user
  // job from user
  // endDate from Calendar Select
  // startTime for TimeSelect
  // name from Location 
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
  {
    id: 4,
    name: "Therese Wunsch",
    job: "c",
    date: "2015-01-02",
    availableTime: "10.00",
    location: "Online",
  },
  {
    id: 4,
    name: "Therese Wunsch",
    job: "c",
    date: "2015-02-01",
    availableTime: "10.00",
    location: "Online",
  },
];

const Dashboard = () => {
  const [meetings, setMeetings] = useState(defaultMeetings);
  const [job, setJob] = useState("All jobs");
  const [time, setTime] = useState("All day");
  const [location, setLocation] = useState("All location");

  let navigate = useNavigate()
  const userGroup = () => {
    navigate('/UserGroupSetting')
  }

  // const getMeetingsGroupByDate = useMemo(() => {
  //   return _.groupBy(meetings, (meeting) => meeting.date);
  // }, [meetings]);

  useEffect(() => {
    // when select changed
    console.log("job time location changed");
    console.log(job, time, location);

    // call service send job time location
    // axios({
    //   url: `https://reqres.in/api/users?page=2`,
    //   params: {
    //     job,
    //     time,
    //     location,
    //   },
    // }).then((res) => {
    //   setMeetings(res.data);
    // });
  }, [job, time, location]);

  const uniqJob = [...new Set(meetings?.map((r, idx) => (r.job)))]
  console.log(uniqJob)
    const uniqLocation = [...new Set(meetings?.map((r, idx) => r.location))];
    console.log(uniqLocation);

  const groupByDate = _.groupBy(meetings, (meeting) => meeting.date);
  console.log("groupByDate", groupByDate);
  return (
    <>
      <Navbar />
      <div className=" mt-3 border-t-[1px] border-gray-500">
        <div className="mx-4 flex items-center justify-between pt-5">
          <h1 className="text-xl">KARENTOROKU USER</h1>
          <button className="rounded-lg bg-gray-300 py-2 px-7 text-center text-base " onClick={userGroup}>
            Group<br />Management
          </button>
        </div>
        </div>
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
                {uniqJob?.map((r, idx) => (
                  <option key={idx} value={r}>
                    {r}
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
                {uniqLocation?.map((r, idx) => (
                  <option key={idx} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </form>
        {/* <!-- component --> */}
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
            <div class="inline-block min-w-full py-2 sm:px-2 lg:px-8">
              <div class="overflow-hidden">
                <table class="min-w-full">
                  <thead class="border-b bg-gray-200">
                    <tr>
                      <th
                        scope="col"
                        class="px-2 py-4 text-left text-sm font-medium text-gray-900"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-4 text-left text-sm font-medium text-gray-900"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-4 text-left text-sm font-medium text-gray-900"
                      >
                        Location
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-4 text-left text-sm font-medium text-gray-900"
                      >
                        Job
                      </th>
                      <th
                        scope="col"
                        class="px-2 py-4 text-left text-sm font-medium text-gray-900"
                      >
                        Available Time
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {_.map(groupByDate, (dateMeetings, date) => {
                      return (
                        <>
                          <tr class="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                            <td colSpan={5}>{date}</td>
                          </tr>
                          {_.map(dateMeetings, (dateMeeting, i) => (
                            <tr class="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
                              <td class="whitespace-nowrap px-2 py-4 text-sm font-medium text-gray-900">
                                {i + 1}
                              </td>
                              <td class="whitespace-nowrap px-2 py-4 text-sm font-light text-gray-900">
                                {dateMeeting.name}
                              </td>
                              <td class="whitespace-nowrap px-2 py-4 text-sm font-light text-gray-900">
                                {dateMeeting.location}
                              </td>
                              <td class="whitespace-nowrap px-2 py-4 text-sm font-light text-gray-900">
                                {dateMeeting.job}
                              </td>
                              <td class="whitespace-nowrap px-2 py-4 text-sm font-light text-gray-900">
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
