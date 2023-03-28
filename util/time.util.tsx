import moment from "moment-timezone";

export function getTimeStatement() {
  const timeZone = "America/Chicago";
  const format = "dddd, MMMM Do YYYY, h:mm a";
  const timeShort = moment().tz(timeZone).format(format);
  return `It is ${timeShort} in Des Moines`;
}
