import { Profile, ValidateProfileError } from '../../types/profile';

export const validateProfileData = (profile?: Profile) => {
  const errors:ValidateProfileError[] = [];

  if (!profile) {
    return [ValidateProfileError.NO_DATA];
  }
  const { first, lastname, age, username, country } = profile;

  if (!first || !lastname || !username) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA);
  }

  if ((first && first?.length > 0 && !/[a-zA-Zа-яА-Я]+/gm.test(first as string)) ||
    (lastname && lastname?.length > 0 && !/[a-zA-Zа-яА-Я]+/gm.test(lastname as string))) {
    errors.push(ValidateProfileError.INCORRECT_NAME);
  }

  if (!age || age < 0 || age > 100) {
    errors.push(ValidateProfileError.INCORRECT_AGE);
  }

  if (!country) {
    errors.push(ValidateProfileError.INCORRECT_COUNTRY);
  }

  return errors;
};
