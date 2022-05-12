import { action } from '@storybook/addon-actions';
import React from 'react';
import { FlightCard as Component } from './FlightCard';
import flightMock from '../../../__mocks__/flight';

export default {
  title: 'Components/Flight',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Card = Template.bind({});
Card.args = {
  ...flightMock,
  onSelect: action('click'),
};
