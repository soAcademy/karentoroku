import dayjs from "dayjs";

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month")
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month")

  return (firstDateOfMonth, lastDateOfMonth)


};
