import { getWorkdaysInMonth } from "./getHolidaysInMonth";


test('getWorkdaysInMonth in 1/2023', () => {
  // TODO: Might need to split the function for easier test coverage
  const workDays = getWorkdaysInMonth(2023, 0);
  expect(workDays).toBe(21);
});
