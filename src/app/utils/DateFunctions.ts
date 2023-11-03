import {Observable} from "rxjs";

export function parseMonthYearString(input: string) {
  const [month, year] = input.split(' ');
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const index = months.findIndex(m => m === month);

  console.log(new Date(+year, index))
  return new Date(+year, index);
}

export function parseMonthYearDayString(input: string) {
  let [month, day, year] = input.split(' ');
  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const index = months.findIndex(m => m === month);
  day = day.replace(',', '');
  return new Date(+year, index, +day);

}
