import _ from "lodash";

export const ScheduledEventsCard = () => {
  // customerId in EventSelect
  // selectCalendar from EventSelect
  // selectTime from EventSelect
  // (Timeduration)eventTypeId from EventSelect
  // (name)eventTypeId from EventSelect
  const meetings = [
    {
      CustomerName: "A",
      date: "2023-03-21",
      timeStart: 8.11,
      duration: 0.3,
      MeetingName: " Meeting A",
      price: 300,
    },
    {
      CustomerName: "B",
      date: "2023-03-21",
      timeStart: 8.11,
      duration: 0.3,
      MeetingName: " Meeting B",
      price: 300,
    },
    {
      CustomerName: "C",
      date: "2023-03-22",
      timeStart: 8.11,
      duration: 0.3,
      MeetingName: " Meeting C",
      price: 300,
    },
  ];

  // const [meeting, setMeeting] = useState();

  // // 1.สร้าง axios
  // const getAllMeeting = async () => {
  //   const result = await axios.post("http://localhost:3000/getMeeting");
  //   console.log("result", result);
  //   setMeeting(result.data);
  // };
  // // 2.useEffects
  // useEffect(() => {
  //   getAllMeeting();
  // }, []);

  const groupByDate = _.groupBy(meetings, (meeting) => meeting.date);
  console.log("groupByDate", groupByDate);

  return (
    <>
      {_.map(groupByDate, (dateMeetings, date) => {
        return (
          <>
            <h4 className="text-xm ml-5 font-semibold">{date}</h4>
            <div className="m-auto flex flex-col gap-2 md:flex-row">
              {_.map(dateMeetings, (r, idx) => (
                <div
                  key={idx}
                  className="h-120 w-370 m-5 rounded bg-orange-200 p-2 shadow"
                >
                  <header className="flex border-b p-2">
                    <div className="flex flex-col">
                      <h1 className="text-xm ">{r.timeStart + r.duration} </h1>
                    </div>
                  </header>
                  <div className="flex w-full flex-wrap gap-4 p-2">
                    <div className="flex w-full flex-col">
                      <h4 className="text-xs">Name</h4>
                      <h1 className="text-xm font-semibold">
                        {r.CustomerName}
                      </h1>
                    </div>

                    <div className="flex flex-col">
                      <h4 className="text-xs">Event Name</h4>
                      <h1 className="text-md font-semibold">{r.MeetingName}</h1>
                    </div>
                    <div className="flex flex-col">
                      <h4 className="text-xs">Price</h4>
                      <h1 className="text-md font-semibold">{r.price} THB</h1>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        );
      })}
    </>

    // <div className="md:flex-row gap-2 flex flex-col ">
    //   {meetings.map((r, idx) => (
    //     <div
    //       key={idx}
    //       className="h-120 w-370 m-auto mt-5 rounded bg-orange-200 p-2 shadow"
    //     >
    //       <header className="flex border-b p-2">
    //         <div className="flex flex-col">
    //           <h4 className="text-xm font-semibold">{r.date}</h4>
    //           <h1 className="text-xm ">{r.timeStart + r.duration} </h1>
    //         </div>
    //       </header>
    //       <div className="flex w-full flex-wrap gap-4 p-2">
    //         <div className="flex w-full flex-col">
    //           <h4 className="text-xs">Name</h4>
    //           <h1 className="text-xm font-semibold">{r.CustomerName}</h1>
    //         </div>

    //         <div className="flex flex-col">
    //           <h4 className="text-xs">Event Type</h4>
    //           <h1 className="text-md font-semibold">{r.MeetingName}</h1>
    //         </div>
    //       </div>
    //     </div>
    //   ))}
    // </div>
  );
};
