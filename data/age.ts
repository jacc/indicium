// thanks ali <3
import day from "dayjs";
const birthday = day("9 December 2002").toDate();
export const age = Math.abs(
  new Date(Date.now() - birthday.getTime()).getUTCFullYear() - 1970
);
