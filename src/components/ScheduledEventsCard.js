export const ScheduledEventsCard = () => {
  const meeting = [
    {
      CustomerName: "A",
      date: "2023-03-21",
      timeStart: 8.11,
      duration: 0.3,
      eventType: "one-on-one",
      MeetingName: " A one-on-one",
    },
    {
      CustomerName: "B",
      date: "2023-03-21",
      timeStart: 8.11,
      duration: 0.3,
      eventType: "one-on-one",
      MeetingName: " B one-on-one",
    },
    {
      CustomerName: "C",
      date: "2023-03-21",
      timeStart: 8.11,
      duration: 0.3,
      eventType: "one-on-one",
      MeetingName: " C one-on-one",
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

  return (
    <div class="flex flex-wrap gap-2">
      {meeting.map((r, idx) => (
        <div
          key={idx}
          class="h-120 w-370 m-auto mt-5 rounded bg-orange-200 p-2 shadow"
        >
          <header class="flex border-b p-2">
            <div class="flex flex-col">
              <h4 class="text-xm font-semibold">{r.date}</h4>
              <h1 class="text-xm ">{r.timeStart + r.duration} </h1>
            </div>
          </header>
          <div class="flex w-full flex-wrap gap-4 p-2">
            <div class="flex w-full flex-col">
              <h4 class="text-xs">Name</h4>
              <h1 class="text-xm font-semibold">{r.CustomerName}</h1>
            </div>

            <div class="flex flex-col">
              <h4 class="text-xs">Event Type</h4>
              <h1 class="text-md font-semibold">{r.MeetingName}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
