export const initializeTimes = () => [
  '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
  '05:00 PM', '06:00 PM', '07:00 PM', '08:00 PM', '09:00 PM'
];

export const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return initializeTimes();
    default:
      return state;
  }
};
