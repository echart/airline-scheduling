import React, { useState } from 'react';
import { AircraftCardList as Component } from './AircraftCardList';
import AircraftMock from '../../../__mocks__/aircraft';

export default {
  title: 'Components/Aircraft/Aircraft Card List',
  component: Component,
};

const Template = (args) => {
  const [selectedId, setSelectedId] = useState(AircraftMock.id);

  return <Component {...args} selectedId={selectedId} onSelect={setSelectedId} />;
};

export const AircraftCardList = Template.bind({});
AircraftCardList.args = {
  aircrafts: [
    AircraftMock,
    { id: 'BCAD', utilization: 49 },
    { id: 'ACDB', utilization: 51 },
    { id: 'ADCB', utilization: 100 },
  ],
};
