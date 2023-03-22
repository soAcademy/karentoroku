import { Fragment, useState } from "react";
import { Listbox, Switch, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone"; // dependent on utc plugin

dayjs.extend(utc);
dayjs.extend(timezone);

const timeZones = Intl.supportedValuesOf("timeZone").map(
  (timeZoneValue, idx) => ({ id: idx + 1, name: timeZoneValue })
);

const guessedTimeZone = timeZones.find(
  (timeZone) => timeZone.name === dayjs.tz.guess()
);

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const initialWeeklyHours = [
  { day: 0, enabled: false, hours: [] },
  { day: 1, enabled: true, hours: [{ startTime: 17 * 60, endTime: 18 * 60 }] },
  { day: 2, enabled: true, hours: [{ startTime: 17 * 60, endTime: 18 * 60 }] },
  { day: 3, enabled: true, hours: [{ startTime: 17 * 60, endTime: 18 * 60 }] },
  {
    day: 4,
    enabled: true,
    hours: [
      { startTime: 17 * 60, endTime: 18 * 60 },
      { startTime: 19 * 60, endTime: 21 * 60 },
    ],
  },
  { day: 5, enabled: false, hours: [] },
  { day: 6, enabled: false, hours: [] },
];

const SetWorkingHours = () => {
  const [selectedTimeZone, setSelectedTimeZone] = useState(guessedTimeZone);
  const [weeklyHours, setWeeklyHours] = useState(initialWeeklyHours);

  const handleWeekdaySwitchClick = (weekdayIdx) => {
    const _weeklyHours = [...weeklyHours];
    _weeklyHours.map((day, idx) => {
      day.enabled = weekdayIdx === idx ? !day.enabled : day.enabled;
      return day;
    });
    setWeeklyHours(_weeklyHours);
  };

  return (
    <>
      <h3 className="text-md font-bold">Working hours</h3>
      <h4 className="text-base font-bold uppercase">Active on</h4>
      <p>2 Event Types</p>
      <h4 className="text-base font-bold uppercase">Time zone</h4>
      <Listbox
        value={selectedTimeZone}
        onChange={setSelectedTimeZone}
        className="z-10"
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">{selectedTimeZone.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {timeZones.map((timeZone, timeZoneIdx) => (
                <Listbox.Option
                  key={timeZoneIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={timeZone}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {timeZone.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      <h4 className="text-base font-bold uppercase">Set your weekly hour</h4>
      <ul>
        {weekdays.map((weekday, weekdayIdx) => (
          <li key={weekdayIdx}>
            <Switch
              checked={weeklyHours[weekdayIdx].enabled}
              onChange={() => handleWeekdaySwitchClick(weekdayIdx)}
              className={`${
                weeklyHours[weekdayIdx].enabled ? "bg-blue-600" : "bg-gray-200"
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span className="sr-only">Enable notifications</span>
              <span
                className={`${
                  weeklyHours[weekdayIdx].enabled
                    ? "translate-x-6"
                    : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </Switch>{" "}
            {weekday}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SetWorkingHours;
