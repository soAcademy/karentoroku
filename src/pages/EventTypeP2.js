import React from "react";
import UserNavbar from "../components/navbar/UserNavbar";

const EventTypeP2 = () => {
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
        <p className="text-sm text-gray-400">Event name, No location given</p>
      </div>
      <div className=" mx-4 mt-10 flex flex-col gap-y-5 border-2 border-gray-400">
        <div className="px-4">
          <p className="text-base">When can people book this event?</p>
          <p className="text-sm text-gray-400">
            30 min, 60 rolling calendar days
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
              value="60"
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
            value="30min"
          />
          <label className="px-4 text-base font-semibold">Price</label>
          <input
            className="mx-4 rounded-xl border-2 border-gray-400 py-2 pl-3 text-base"
            value="500 BHT"
          />
        </div>
        <div className="flex flex-col gap-y-3">
          <span className="mt-14 px-4">
            How do you want to offer your availability for this event type?
          </span>
          <span className="px-4 text-gray-400">
            Select one of your schedules or define custom hours specific to this
            type of event.
          </span>
        </div>
        <button className=" mx-4 mt-2 w-1/2 rounded-xl border-2 border-gray-400 px-2 py-4 text-lg">
          Use an existing schedule
        </button>
        <button className=" mx-4 mt-2 w-1/3 rounded-xl border-2 border-gray-400 px-2 py-4 text-lg">
          Set custom hours
        </button>
        <div className="mx-4 flex flex-col gap-y-2">
          <span className="text-base">TIME ZONE</span>
          <span className="text-orange-700">Bangkok (UTC+7)</span>
        </div>
        <div className="text-center text-xl text-orange-700">
          Save as new schedule
        </div>
        <div className="mx-4 rounded-xl border-2 border-gray-400 ">
          <div className="mt-5 py-2">
            <div className="flex justify-between px-3 py-2">
              <div className="flex items-center space-x-10">
                <div>
                  <input id="SUNDAY" type="checkbox" value="SUNDAY" />
                </div>
                <label>SUNDAY</label>
              </div>
              <div>+</div>
            </div>
            <div className="flex items-center justify-between px-3">
              <div className="flex items-center space-x-2 py-2">
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="9:00"
                />
                <p>-</p>
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="17:00"
                />
              </div>
              <div>bin</div>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-400 py-2">
            <div className="flex justify-between px-3 py-2">
              <div className="flex items-center space-x-10">
                <div>
                  <input id="MONDAY" type="checkbox" value="MONDAY" />
                </div>
                <label>MONDAY</label>
              </div>
              <div>+</div>
            </div>
            <div className="flex items-center justify-between px-3">
              <div className="flex items-center space-x-2 py-2">
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="9:00"
                />
                <p>-</p>
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="17:00"
                />
              </div>
              <div>bin</div>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-400 py-2">
            <div className="flex justify-between px-3 py-2">
              <div className="flex items-center space-x-10">
                <div>
                  <input id="TUESDAY" type="checkbox" value="TUESDAY" />
                </div>
                <label>TUESDAY</label>
              </div>
              <div>+</div>
            </div>
            <div className="flex items-center justify-between px-3">
              <div className="flex items-center space-x-2 py-2">
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="9:00"
                />
                <p>-</p>
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="17:00"
                />
              </div>
              <div>bin</div>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-400 py-2">
            <div className="flex justify-between px-3 py-2">
              <div className="flex items-center space-x-10">
                <div>
                  <input id="WEDNESDAY" type="checkbox" value="WEDNESDAY" />
                </div>
                <label>WEDNESDAY</label>
              </div>
              <div>+</div>
            </div>
            <div className="flex items-center justify-between px-3">
              <div className="flex items-center space-x-2 py-2">
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="9:00"
                />
                <p>-</p>
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="17:00"
                />
              </div>
              <div>bin</div>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-400 py-2">
            <div className="flex justify-between px-3 py-2">
              <div className="flex items-center space-x-10">
                <div>
                  <input id="THURSDAY" type="checkbox" value="THURSDAY" />
                </div>
                <label>THURSDAY</label>
              </div>
              <div>+</div>
            </div>
            <div className="flex items-center justify-between px-3">
              <div className="flex items-center space-x-2 py-2">
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="9:00"
                />
                <p>-</p>
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="17:00"
                />
              </div>
              <div>bin</div>
            </div>
          </div>
          <div className="border-t-[1px] border-gray-400 py-2">
            <div className="flex justify-between px-3 py-2">
              <div className="flex items-center space-x-10">
                <div>
                  <input id="FRIDAY" type="checkbox" value="FRIDAY" />
                </div>
                <label>FRIDAY</label>
              </div>
              <div>+</div>
            </div>
            <div className="flex items-center justify-between px-3">
              <div className="flex items-center space-x-2 py-2">
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="9:00"
                />
                <p>-</p>
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="17:00"
                />
              </div>
              <div>bin</div>
            </div>
          </div>
          <div className=" mb-5 border-t-[1px] border-gray-400 py-2">
            <div className="flex justify-between px-3 py-2">
              <div className="flex items-center space-x-10">
                <div>
                  <input id="SUNDAY" type="checkbox" value="SUNDAY" />
                </div>
                <label>SUNDAY</label>
              </div>
              <div>+</div>
            </div>
            <div className="flex items-center justify-between px-3">
              <div className="flex items-center space-x-2 py-2">
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="9:00"
                />
                <p>-</p>
                <input
                  className="w-1/5 rounded-lg border-2 border-gray-400 p-2 text-center text-base"
                  value="17:00"
                />
              </div>
              <div>bin</div>
            </div>
          </div>
        </div>
        <div className=" mt-14 flex flex-col items-center justify-center gap-5 py-5 text-center">
          <button className="rounded-2xl border-2 bg-orange-700 py-3 px-20 text-lg text-white">
            Next
          </button>
          <button className="rounded-2xl border-2 py-3 px-20 text-lg">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default EventTypeP2;
