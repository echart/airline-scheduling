import { Timeline as Component } from './Timeline';

import FlightMock from '../../../__mocks__/flight';
import { useTimeline } from '../../../hooks/useTimeline/useTimeline';
import { useState } from 'react';

export default {
  title: 'Components/Rotation/Timeline',
  component: Component,
};

const Template = (args) => {
  const [flights] = useState([FlightMock]);
  const items = useTimeline(flights);
  return <Component {...args} items={items} />;
};

export const Timeline = Template.bind({});
Timeline.args = {
  flights: [FlightMock],
}
