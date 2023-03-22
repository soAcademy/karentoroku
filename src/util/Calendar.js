import dayjs from "dayjs";

const Calendar = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  // create prefix date
  // for (let i = 0; i < firstDateOfMonth.day(); i++) {
  //   arrayOfDate.push(firstDateOfMonth.day(i));
  // }

  //generate current date
  // const arrayOfDate = [];
  // for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
  //   arrayOfDate.push(firstDateOfMonth.date(i));
  // }

  // const remaining = 42 - arrayOfDate.length;

  // for (
  //   let i = lastDateOfMonth.date() + 1;
  //   i < lastDateOfMonth.date() + remaining;
  //   i++
  // ) {
  //   arrayOfDate.push(firstDateOfMonth.date(i));
  // }

  // <div></div>

  return firstDateOfMonth, lastDateOfMonth;
};

export default Calendar;
