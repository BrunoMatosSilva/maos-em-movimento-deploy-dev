import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export function getToday() {
  return dayjs().startOf('day').utc(true).toDate();
}
