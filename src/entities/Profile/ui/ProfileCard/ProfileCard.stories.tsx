import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import AvatarImg from 'shared/assets/tests/storybook.png';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  data: {
    username: 'admin',
    first: 'Andrey',
    lastname: 'Morozov',
    age: 28,
    country: Country.Russia,
    currency: Currency.RUB,
    city: 'Yekaterinburg',
    avatar: AvatarImg,
  },
  readonly: true,
  isLoading: false
};

export const withError = Template.bind({});
withError.args = {
  data: {
    username: 'admin',
    first: 'Andrey',
    lastname: 'Morozov',
    age: 28,
    country: Country.Russia,
    currency: Currency.RUB,
    city: 'Yekaterinburg',
    avatar: AvatarImg,
  },
  error: 'true'
};

export const isLoading = Template.bind({});
isLoading.args = {
  data: {
    username: 'admin',
    first: 'Andrey',
    lastname: 'Morozov',
    age: 28,
    country: Country.Russia,
    currency: Currency.RUB,
    city: 'Yekaterinburg',
    avatar: AvatarImg,
  },
  isLoading: true
};
