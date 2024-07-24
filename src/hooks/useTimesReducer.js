import { fetchAPI } from '../api';

export const initializeTimes = () => {
  const today = new Date();
  const times = fetchAPI(today);
  return times;
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const times = fetchAPI(new Date(action.payload));
      return times;
    default:
      return state;
  }
};
