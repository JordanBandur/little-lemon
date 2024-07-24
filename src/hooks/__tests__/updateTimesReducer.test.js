import { initializeTimes, updateTimes } from '../useTimesReducer';

describe('initializeTimes', () => {
  test('returns the correct initial times', () => {
    const times = initializeTimes();
    expect(times).toEqual([
      '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
      '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
    ]);
  });
});

describe('updateTimes', () => {
  test('returns the same state when no date is provided', () => {
    const initialState = [
      '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
      '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
    ];
    const newState = updateTimes(initialState, { type: 'UPDATE_TIMES', payload: '2023-07-22' });
    expect(newState).toEqual(initialState);
  });
});
