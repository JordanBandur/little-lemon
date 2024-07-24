import { fetchAPI } from '../api';

export const initializeTimes = async () => {
  const today = new Date();
  const times = await fetchAPI(today);
  return times;
};

export const updateTimes = async (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const times = await fetchAPI(new Date(action.payload));
      return times;
    default:
      return state;
  }
};
