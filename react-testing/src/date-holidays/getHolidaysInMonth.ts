import Holidays from 'date-holidays';

// Yes, I'm totally going to use this in confac 😃

const hd = new Holidays('BE');


export function getWorkdaysInCurrentMonth(): number {
  const now = new Date();
  return getWorkdaysInMonth(now.getFullYear(), now.getMonth());
}



export function getWorkdaysInMonth(year: number, month: number): number {
  // TODO: This is immensely unperformant
  // TODO: Once the tests have been written,
  // TODO: this can be safely refactored
  // TODO: to remove the date-holidays dep

  const date = new Date(year, month, 1);
  const result: Date[] = [];
  while (date.getMonth() === month) {
    // date.getDay = index of ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
    if (date.getDay() !== 0 && date.getDay() !== 6) {
      // console.time('isHoliday');
      const isHoliday = hd.isHoliday(date);
      // console.timeEnd('isHoliday');
      if (!isHoliday) {
        result.push(date);
      }
    }
    date.setDate(date.getDate() + 1);
  }
  return result.length;
}
