import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { ScheduledEventsCard } from "./ScheduledEventsCard";
import { Fragment } from "react";
import UserNavbar from "../components/navbar/UserNavbar";
import { useNavigate } from "react-router-dom";

export const ScheduledEvents = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(localStorage.getItem("status"));
  }, []);

  let navigate = useNavigate();
  if (!value) {
    return navigate("/");
  }

  const scheduledEvent = () => {
    navigate("/ScheduledEvents");
  };

  const toHome = () => {
    navigate("/UserHomepage");
  };

  return (
    <>
      <UserNavbar />
      <div className="mt-5">
        <span className="mx-5 text-2xl">KARENTOROKU</span>
        <div className="border-gray mt-8 flex space-x-5 border-b-[2px] p-2">
          <div
            className="ml-3 cursor-pointer duration-300 hover:font-bold"
            onClick={toHome}
          >
            Event Types
          </div>
          <div
            className="cursor-pointer duration-300 hover:font-bold"
            onClick={scheduledEvent}
          >
            Scheduled Events
          </div>
        </div>
      </div>
      <div className="border-gray flex items-center space-x-16 border-b-[2px]">
          <div>
            <p className="text-xl">username</p>
            <p className="text-xl text-orange-700">karentoroku.com/username</p>
          </div>
        </div>
      <div>
        <Tab.Group
          defaultIndex={1}
          selectedIndex={selectedIndex}
          onChange={setSelectedIndex}
        >
          <Tab.List className=" border-y bg-white py-2 text-gray-500">
            <Tab
              className="px-6 hover:font-bold hover:text-black"
              as={Fragment}
            >
              {({ selected }) => (
                <button className={selected ? "font-bold text-black" : ""}>
                  Upcoming
                </button>
              )}
            </Tab>
            <Tab
              className="px-6 hover:font-bold hover:text-black"
              as={Fragment}
            >
              {({ selected }) => (
                <button className={selected ? "font-bold text-black" : ""}>
                  Pending
                </button>
              )}
            </Tab>
            <Tab
              className="px-6 hover:font-bold hover:text-black"
              as={Fragment}
            >
              {({ selected }) => (
                <button className={selected ? "font-bold text-black" : ""}>
                  Past
                </button>
              )}
            </Tab>

            <Tab
              className="px-6 hover:font-bold hover:text-black"
              as={Fragment}
            >
              {({ selected }) => (
                <button className={selected ? "font-bold text-black" : ""}>
                  Date Range
                </button>
              )}
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel>
              Content 1
              <ScheduledEventsCard />
            </Tab.Panel>
            <Tab.Panel>Content 2</Tab.Panel>
            <Tab.Panel>Content 3</Tab.Panel>
            <Tab.Panel>Content 4</Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};
