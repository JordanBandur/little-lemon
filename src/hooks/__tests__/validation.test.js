import { validateEmail, validatePhone, validateGuests, handleFormValidation } from '../validation';

describe('Validation functions', () => {
  // Test for valid email
  test('validateEmail - valid', () => {
    expect(validateEmail('test@example.com')).toBe(true);
  });

  // Test for invalid email
  test('validateEmail - invalid', () => {
    expect(validateEmail('invalid-email')).toBe(false);
  });

  // Test for valid phone number
  test('validatePhone - valid', () => {
    expect(validatePhone('+12345678901')).toBe(true);
  });

  // Test for invalid phone number
  test('validatePhone - invalid', () => {
    expect(validatePhone('123')).toBe(false);
  });

  // Test for valid number of guests
  test('validateGuests - valid', () => {
    expect(validateGuests(5)).toBe(true);
  });

  // Test for invalid number of guests
  test('validateGuests - invalid', () => {
    expect(validateGuests(0)).toBe(false);
  });

  // Test for form validation
  test('handleFormValidation', () => {
    const form = {
      name: { validity: { valid: false }, value: '' },
      email: { validity: { valid: true }, value: 'invalid-email' },
      phone: { validity: { valid: true }, value: '123' },
      date: { validity: { valid: false }, value: '' },
      time: { validity: { valid: false }, value: '' },
      guests: { validity: { valid: true }, value: '0' },
      occasion: { validity: { valid: false }, value: '' },
    };

    const expectedErrors = {
      name: 'Please enter your name.',
      email: 'Please enter a valid email address.',
      phone: 'Please enter a valid phone number.',
      date: 'Please select a valid date.',
      time: 'Please select a valid time.',
      guests: 'Number of guests should be greater than 0.',
      occasion: 'Please select an occasion.',
    };

    expect(handleFormValidation(form)).toEqual(expectedErrors);
  });
});
