import {
  profileActions,
  profileReducer,
  ProfileSchema,
  updateProfileData,
  ValidateProfileError
} from 'entities/Profile';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';

const data = {
  username: 'admin',
  first: 'Andrey',
  lastname: 'Morozov',
  age: 28,
  country: Country.Russia,
  currency: Currency.RUB,
  city: 'Yekaterinburg',
};

describe('profileSlice', () => {
  test('test set readonly', () => {
    const state: DeepPartial<ProfileSchema> = { readonly: true };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.setReadonly(false)
    )).toEqual({ readonly: false });
  });

  test('test cancelEdit', () => {
    const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.cancelEdit()
    )).toEqual({
      readonly: true,
      validateErrors: undefined,
      data,
      form: data
    });
  });

  test('test updateProfile', () => {
    const state: DeepPartial<ProfileSchema> = { form: data };
    expect(profileReducer(
      state as ProfileSchema,
      profileActions.updateProfile({ age: 29 })
    )).toEqual({ form: { ...data, age: 29 } });
  });

  test('test updateProfile service pending', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: false, validateError: [ValidateProfileError.INCORRECT_USER_DATA] };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.pending
    )).toEqual({
      isLoading: true,
      validateError: undefined
    });
  });

  test('test updateProfile service fulfilled', () => {
    const state: DeepPartial<ProfileSchema> = { isLoading: true };
    expect(profileReducer(
      state as ProfileSchema,
      updateProfileData.fulfilled(data, '')
    )).toEqual({
      data,
      form: data,
      readonly: true,
      isLoading: false,
      validateError: undefined
    });
  });
});
