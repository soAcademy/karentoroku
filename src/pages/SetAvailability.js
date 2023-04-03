import { Fragment, useState, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import UserNavbar from "../components/navbar/UserNavbar";
import SetWorkingHours from "../components/SetWorkingHours";
import SetCustomHours from "../components/SetCustomHours";
import { useNavigate } from "react-router-dom";
// import dayjs from "dayjs";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import { auth } from "../components/auth/config";

const schedules = [
  { id: 1, name: "Working hours" },
  { id: 2, name: "Custom hours" },
];

const SetAvailability = () => {
  const [selectedSchedule, setSelectedSchedule] = useState(schedules[0]);

  const [value, setValue] = useState("");

  useEffect(() => {
    setValue(localStorage.getItem("status"));
  }, []);

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/auth.user
  //       const uid = user.uid;
  //       // ...
  //       // console.log(user);
  //       console.log("uid", uid);
  //       auth.currentUser
  //         .getIdToken(/* forceRefresh */ true)
  //         .then(function (idToken) {
  //           // Send token to your backend via HTTPS
  //           // ...
  //           // console.log(idToken);
  //           axios
  //             .post("http://localhost:8000/getUserByToken", {
  //               idToken: idToken,
  //             })
  //             .then(function (response) {
  //               console.log(response);
  //             })
  //             .catch(function (error) {
  //               console.log(error);
  //             });
  //         })
  //         .catch(function (error) {
  //           // Handle error
  //           console.log(error);
  //         });
  //     } else {
  //       // User is signed out
  //       // ...
  //       console.log("user is logged out");
  //     }
  //   });
  // }, []);

  let navigate = useNavigate();
  if (!value) {
    return navigate("/");
  }

  return (
    <>
      <UserNavbar />
      <div className="mt-5 w-full">
        <div className="">
          <div className="mx-5 flex flex-col gap-5">
            <h1 className="mt-10 text-3xl font-bold">Set your availability</h1>
            <p>
              Choose a schedule below to edit or create a new one that you can
              apply to your event types
            </p>
            <h2 className="text-lg font-bold">Schedule</h2>
            <Listbox value={selectedSchedule} onChange={setSelectedSchedule}>
              <div className="relative mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">
                    {selectedSchedule.name}
                  </span>
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
                    {schedules.map((schedule, scheduleIdx) => (
                      <Listbox.Option
                        key={scheduleIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-amber-100 text-amber-900"
                              : "text-gray-900"
                          }`
                        }
                        value={schedule}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {schedule.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
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
            {selectedSchedule.id === 1 && <SetWorkingHours />}
            {selectedSchedule.id === 2 && <SetCustomHours />}
          </div>
        </div>
      </div>
    </>
  );
};

export default SetAvailability;