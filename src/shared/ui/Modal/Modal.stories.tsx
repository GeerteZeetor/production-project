import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut culpa deleniti dolor, enim excepturi, explicabo facilis iste nisi nulla odio officia perferendis quam quas repudiandae similique voluptas voluptatum!',
};
export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam aut culpa deleniti dolor, enim excepturi, explicabo facilis iste nisi nulla odio officia perferendis quam quas repudiandae similique voluptas voluptatum!',
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];