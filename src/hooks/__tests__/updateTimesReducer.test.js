import { initializeTimes, updateTimes } from '../useTimesReducer';
import { fetchAPI } from '../../api';

// Mock the fetchAPI function
jest.mock('../../api', () => ({
  fetchAPI: jest.fn(),
}));

describe('initializeTimes', () => {
  beforeEach(() => {
    fetchAPI.mockClear();
    fetchAPI.mockImplementation(() => Promise.resolve([
      '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'
    ]));
  });

  test('returns the correct initial times', async () => {
    const times = await initializeTimes();
    expect(times).toEqual([
      '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'
    ]);
  });
});

describe('updateTimes', () => {
  beforeEach(() => {
    fetchAPI.mockClear();
    fetchAPI.mockImplementation(() => Promise.resolve([
      '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'
    ]));
  });

  test('returns the correct times for a given date', async () => {
    const initialState = [];
    const action = { type: 'UPDATE_TIMES', payload: '2023-07-22' };
    const newState = await updateTimes(initialState, action);
    expect(newState).toEqual([
      '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM'
    ]);
  });
});
