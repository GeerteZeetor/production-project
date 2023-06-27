import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import { ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
  username: 'admin',
  first: 'Andrey',
  lastname: 'Morozov',
  age: 28,
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Yekaterinburg',
};
describe('validateProfileData', () => {
  test('success', () => {
    const result = validateProfileData(data);

    expect(result).toEqual([]);
  });

  test('without first and last name', () => {
    const result = validateProfileData({ ...data, first: '', lastname: '' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
  });

  test('incorrect first and last name', () => {
    const result = validateProfileData({ ...data, first: '123', lastname: '123' });

    expect(result).toEqual([ValidateProfileError.INCORRECT_NAME]);
  });

  test('without age', () => {
    const result = validateProfileData({ ...data, age: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
  });

  test('without country', () => {
    const result = validateProfileData({ ...data, country: undefined });

    expect(result).toEqual([ValidateProfileError.INCORRECT_COUNTRY]);
  });

  test('without data', () => {
    const result = validateProfileData({ });

    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
  });
});
