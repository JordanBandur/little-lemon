export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const validatePhone = (phone) => {
  const phonePattern = /^\+?\d{10,13}$/;
  return phonePattern.test(phone);
};

export const validateGuests = (guests) => {
  return guests > 0;
};

export const handleFormValidation = (form) => {
  const newErrors = {};

  if (!form.name.validity.valid) {
    newErrors.name = 'Please enter your name.';
  }
  if (!validateEmail(form.email.value)) {
    newErrors.email = 'Please enter a valid email address.';
  }
  if (!validatePhone(form.phone.value)) {
    newErrors.phone = 'Please enter a valid phone number.';
  }
  if (!form.date.validity.valid) {
    newErrors.date = 'Please select a valid date.';
  }
  if (!form.time.validity.valid) {
    newErrors.time = 'Please select a valid time.';
  }
  if (!validateGuests(form.guests.value)) {
    newErrors.guests = 'Number of guests should be greater than 0.';
  }
  if (!form.occasion.validity.valid) {
    newErrors.occasion = 'Please select an occasion.';
  }

  return newErrors;
};
