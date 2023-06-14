import React, { Suspense } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <Suspense fallback="">
    <LoginForm {...args} />
  </Suspense>
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type text',
  value: '123',
};
Primary.decorators = [StoreDecorator({ loginForm: { username: '123', password: 'asd' } })];
export const withError = Template.bind({});
withError.args = {
  placeholder: 'Type text',
  value: '123',
};
withError.decorators = [StoreDecorator({ loginForm: { username: '123', password: 'asd', error: 'Error' } })];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({ loginForm: { isLoading: true } })];
