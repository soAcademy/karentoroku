import { Fragment, useState } from "react";
import { Listbox, Switch, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { PlusCircleIcon, TrashIcon } from "@heroicons/react/24/outline";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone"; // dependent on utc plugin
// import customParseFormat from "dayjs/plugin/customParseFormat";
// import duration from "dayjs/plugin/duration";

dayjs.extend(utc);
dayjs.extend(timezone);
// dayjs.extend(customParseFormat);
// dayjs.extend(duration);

// console.log(dayjs("09:00", "hh:mm"));
// console.log(dayjs.duration({ hours: 2 }));
// console.log(new Date("2023-03-30"));
// console.log(
//   dayjs("2023-03-30")
//     .add(dayjs.duration({ hours: 2 }))
//     .toDate()
// );
// console.log(dayjs.duration(7200000).as("hours").toDate());

const timeStringToTimeInt = (timeString) => {
  const timeArray = timeString.split(":");
  return Number(timeArray[0]) * 60 + Number(timeArray[1]);
};

const timeIntToTimeString = (timeInt) => {
  return `${Math.floor(timeInt / 60).toLocaleString("en", {
    minimumIntegerDigits: 2,
  })}:${(timeInt % 60).toLocaleString("en", { minimumIntegerDigits: 2 })}`;
};

const defaultStartTime = timeStringToTimeInt("09:00");
const defaultEndTime = timeStringToTimeInt("12:00");

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
  {
    day: 1,
    enabled: true,
    hours: [
      {
        startTime: timeStringToTimeInt("17:00"),
        endTime: timeStringToTimeInt("18:00"),
      },
    ],
  },
  {
    day: 2,
    enabled: true,
    hours: [
      {
        startTime: timeStringToTimeInt("17:00"),
        endTime: timeStringToTimeInt("18:00"),
      },
    ],
  },
  {
    day: 3,
    enabled: true,
    hours: [
      {
        startTime: timeStringToTimeInt("17:00"),
        endTime: timeStringToTimeInt("18:00"),
      },
    ],
  },
  {
    day: 4,
    enabled: true,
    hours: [
      {
        startTime: timeStringToTimeInt("17:00"),
        endTime: timeStringToTimeInt("18:00"),
      },
      {
        startTime: timeStringToTimeInt("19:00"),
        endTime: timeStringToTimeInt("21:00"),
      },
    ],
  },
  { day: 5, enabled: false, hours: [] },
  { day: 6, enabled: false, hours: [] },
];

const SetWorkingHours = () => {
  
  const [selectedTimeZone, setSelectedTimeZone] = useState(guessedTimeZone);
  const [weeklyHours, setWeeklyHours] = useState(initialWeeklyHours);
  // const [isWeeklyHoursValid, setIsWeeklyHoursValid] = useState(true);

  const handleWeekdaySwitchClick = (weekdayIdx) => {
    const _weeklyHours = [...weeklyHours];
    _weeklyHours.map((day, idx) => {
      day.enabled = weekdayIdx === idx ? !day.enabled : day.enabled;
      return day;
    });
    setWeeklyHours(_weeklyHours);
  };
  

  const handlePlusClick = (weekdayIdx) => {
    const _weeklyHours = [...weeklyHours];
    _weeklyHours[weekdayIdx].hours = [
      ..._weeklyHours[weekdayIdx].hours,
      {
        startTime: defaultStartTime,
        endTime: defaultEndTime,
      },
    ];
    setWeeklyHours(_weeklyHours);
  };

  const handleTimeChange = (e, weekdayIdx, periodIdx, isStartTime) => {
    e.preventDefault();
    const _weeklyHours = [...weeklyHours];
    isStartTime
      ? (_weeklyHours[weekdayIdx].hours[periodIdx].startTime =
          timeStringToTimeInt(e.target.value))
      : (_weeklyHours[weekdayIdx].hours[periodIdx].endTime =
          timeStringToTimeInt(e.target.value));
    setWeeklyHours(_weeklyHours);
    // areAnyHoursOverlapped(weeklyHours[weekdayIdx].hours) ??
    //   console.log(`Overlapping hours on ${weekdays[weekdayIdx]}`);
  };

  const handleTrashClick = (weekdayIdx, periodIdx) => {
    const _weeklyHours = [...weeklyHours];
    _weeklyHours[weekdayIdx].hours = _weeklyHours[weekdayIdx].hours.filter(
      (period, idx) => idx !== periodIdx
    );
    setWeeklyHours(_weeklyHours);
  };

  console.log("weekly Hours:",weeklyHours);

  const areAnyHoursOverlapped = (hours) => {
    const sortedHours = hours.sort(
      (a, b) =>
        // a.startTime.localeCompare(b.startTime) // timeString sorting
        a.startTime - b.startTime // timeInt sorting
    );

    // console.log(sortedHours);

    for (let i = 0; i < sortedHours.length - 1; i++) {
      // console.log(
      //   `compare ${sortedHours[i].endTime} with ${sortedHours[i + 1].startTime}`
      // );
      // console.log(
      //   `result: ${sortedHours[i].endTime.localeCompare(
      //     sortedHours[i + 1].startTime
      //   )}`
      // );
      if (
        // sortedHours[i].endTime.localeCompare(sortedHours[i + 1].startTime) >= 0
        // timeString comparison
        sortedHours[i].endTime >= sortedHours[i + 1].startTime // timeInt comparison
      )
        return true;
    }

    return false;
  };

  const isHourInvalid = (hour) => hour.startTime >= hour.endTime;

  // console.log(
  //   areAnyHoursOverlapped([
  //     {
  //       startTime: timeStringToTimeInt("17:00"),
  //       endTime: timeStringToTimeInt("18:00"),
  //     },
  //     {
  //       startTime: timeStringToTimeInt("19:00"),
  //       endTime: timeStringToTimeInt("21:00"),
  //     },
  //   ])
  // );

  const isWeeklyHoursInvalid = (weeklyHours) => {
    return weeklyHours
      .filter((day) => day.enabled === true)
      .reduce((isInvalid, currentDay) => {
        return (
          isInvalid ||
          areAnyHoursOverlapped(currentDay.hours) ||
          currentDay.hours.reduce((isInvalid, currentHour) => {
            return isInvalid || isHourInvalid(currentHour);
          }, false)
        );
      }, false);
  };

  return (
    <>
      <h4 className="text-base font-bold uppercase">Time zone</h4>
      <Listbox
        value={selectedTimeZone}
        onChange={setSelectedTimeZone}
        className="z-10"
      >
        <div className="relative my-4">
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
      <div>{isWeeklyHoursInvalid(weeklyHours)}</div>
      {isWeeklyHoursInvalid(weeklyHours) && (
        <div
          className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium">Error!</span> The availability schedule
          is invalid.
        </div>
      )}
      <ul className="flex flex-col gap-2">
        {weekdays.map((weekday, weekdayIdx) => (
          <Fragment key={weekdayIdx}>
            <li className="flex flex-row items-center justify-between gap-2 py-2">
              <Switch
                checked={weeklyHours[weekdayIdx].enabled}
                onChange={() => handleWeekdaySwitchClick(weekdayIdx)}
                className={`${
                  weeklyHours[weekdayIdx].enabled
                    ? "bg-amber-600"
                    : "bg-gray-200"
                } relative inline-flex h-6 w-11 items-center rounded-full`}
              >
                <span className="sr-only">Enable {weekday}</span>
                <span
                  className={`${
                    weeklyHours[weekdayIdx].enabled
                      ? "translate-x-6"
                      : "translate-x-1"
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
              </Switch>
              <div className="grow font-bold">{weekday}</div>
              <button onClick={() => handlePlusClick(weekdayIdx)}>
                <PlusCircleIcon className="h-5 w-5 text-amber-600" />
              </button>
            </li>
            <ul className="flex flex-col gap-2">
              {weeklyHours[weekdayIdx].enabled &&
                weeklyHours[weekdayIdx].hours.map((period, periodIdx) => (
                  <li
                    key={periodIdx}
                    className="flex flex-row items-center justify-between gap-2"
                  >
                    <input
                      type="time"
                      value={timeIntToTimeString(period.startTime)}
                      onChange={(e) =>
                        handleTimeChange(e, weekdayIdx, periodIdx, true)
                      }
                    />{" "}
                    -{" "}
                    <input
                      type="time"
                      value={timeIntToTimeString(period.endTime)}
                      onChange={(e) =>
                        handleTimeChange(e, weekdayIdx, periodIdx, false)
                      }
                    />{" "}
                    <button
                      onClick={() => handleTrashClick(weekdayIdx, periodIdx)}
                    >
                      <TrashIcon className="h-5 w-5 text-amber-600" />
                    </button>
                  </li>
                ))}
            </ul>
          </Fragment>
        ))}
      </ul>
    </>
  );
};

export default SetWorkingHours;