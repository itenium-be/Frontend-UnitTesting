// ATTN: Activating these tests increases test runtime with (10s+)

import { getWorkdaysInCurrentMonth, getWorkdaysInMonth } from "./getHolidaysInMonth";

export default {};

xit('has 21 work days in 1/2023', () => {
  // TODO: Might need to split the function for easier test coverage
  // const workDays = getWorkdaysInMonth(2023, 0);
  // expect(workDays).toBe(21);
});


type MonthDetails = {
  workDays: number;
  weekendDays: number;
  holidays: Date[];
}

const getMonthDetails = (year: number, month: number): MonthDetails => ({} as MonthDetails);


describe('get month details', () => {
  it('calculates the workDays & weekendDays', () => {
    const details = getMonthDetails(2023, 1);
    expect(details.workDays).not.toBe(7);
  });

  // it('knows about oudejaarsavond', () => {
  //   const details = getMonthDetails(2023, 11);
  //   expect(details.holidays).toHaveIt(?);
  // });
});




describe('Bonus points for time travel', () => {
  it('has ? work days in current month', () => {
    const workDays = getWorkdaysInCurrentMonth();

    // TODO: for some reason, this test has
    // TODO: to be updated from time to time
    expect(workDays).toBe(23);
  });
});
