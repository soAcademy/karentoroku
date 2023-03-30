import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";
import { ScheduledEventsCard } from "./ScheduledEventsCard";
import { Fragment } from "react";
import UserNavbar from "../components/navbar/UserNavbar";
import { useNavigate } from "react-router-dom";

export const ScheduledEvents = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div>
      <Tab.Group
        defaultIndex={1}
        selectedIndex={selectedIndex}
        onChange={setSelectedIndex}
      >
        <Tab.List className=" border-y bg-white py-2 text-gray-500">
          <Tab className="px-6 hover:font-bold hover:text-black" as={Fragment}>
            {({ selected }) => (
              <button className={selected ? "font-bold text-black" : ""}>
                Upcoming
              </button>
            )}
          </Tab>
          {/* <Tab className="px-6 hover:font-bold hover:text-black" as={Fragment}>
            {({ selected }) => (
              <button className={selected ? "font-bold text-black" : ""}>
                Pending
              </button>
            )}
          </Tab> */}
          <Tab className="px-6 hover:font-bold hover:text-black" as={Fragment}>
            {({ selected }) => (
              <button className={selected ? "font-bold text-black" : ""}>
                Past
              </button>
            )}
          </Tab>

          {/* <Tab className="px-6 hover:font-bold hover:text-black" as={Fragment}>
            {({ selected }) => (
              <button className={selected ? "font-bold text-black" : ""}>
                Date Range
              </button>
            )}
          </Tab> */}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            <ScheduledEventsCard />
          </Tab.Panel>
          <Tab.Panel>Content 2</Tab.Panel>
          {/* <Tab.Panel>Content 3</Tab.Panel>
          <Tab.Panel>Content 4</Tab.Panel> */}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
