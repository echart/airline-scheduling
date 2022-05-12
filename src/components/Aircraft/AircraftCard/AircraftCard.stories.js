import React from 'react';
import { AircraftCard as Component } from './AircraftCard';
import AircraftMock from '../../../__mocks__/aircraft';

export default {
  title: 'Components/Aircraft/Aircraft Card',
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const Aircraft = Template.bind({});
Aircraft.args = { ...AircraftMock };
Aircraft.storyName = 'Card';

export const AircraftSelected = Template.bind({});
AircraftSelected.args = {
  ...AircraftMock,
  selected: true,
};
AircraftSelected.storyName = 'Card - Selected State';

export const AircraftHalfOcupation = Template.bind({});
AircraftHalfOcupation.args = {
  ...AircraftMock,
  utilization: 58,
};
AircraftHalfOcupation.storyName = 'Card - Half Utilization';

export const AircraftFull = Template.bind({});
AircraftFull.args = {
  ...AircraftMock,
  utilization: 100,
};
AircraftFull.storyName = 'Card - Full Utilization';
