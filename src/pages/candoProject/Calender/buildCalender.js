export default function buildCalender(value) {
  const startDay = value.locale("fa").clone().startOf("week").startOf("day");
  const endDay = value.locale("fa").clone().endOf("month").endOf("week");
  const day = startDay.clone().subtract(1, "day");
  const calender = [];



  while (day.isBefore(endDay, "day")) {
    calender.push(
      Array(7)
        .fill(0)
        .map(() => day.add(1, "day").clone()),
    );
  }
  return calender;
}
