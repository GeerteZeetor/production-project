import { createSelector } from '@reduxjs/toolkit';
import { getCounter } from '../getCounter/getCounter';
import { User } from '../../types/user';

export const getCounterValue = createSelector(getCounter, (counter: User) => counter.value);
