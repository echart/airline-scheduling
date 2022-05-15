import React, { useState } from 'react';
import { AircraftCardList as Component } from './AircraftCardList';
import AircraftMock from '../../../__mocks__/aircraft';

export default {
  title: 'Components/Aircraft/Aircraft Card List',
  component: Component,
};

const Template = (args) => {
  const [selectedId, setSelectedId] = useState(AircraftMock.ident);

  return <Component {...args} selectedId={selectedId} onSelect={setSelectedId} />;
};

export const AircraftCardList = Template.bind({});
AircraftCardList.args = {
  aircrafts: [
    AircraftMock,
    { ident: 'BCAD', utilization: 49 },
    { ident: 'ACDB', utilization: 51 },
    { ident: 'ADCB', utilization: 100 },
  ],
};
