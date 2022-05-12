

import { render, fireEvent } from '@testing-library/react';
import { FlightCard } from './FlightCard';
import flightMock from '../../../__mocks__/flight';

const data = flightMock;

const TEST_ID = 'flight-card';

it('render flight card', () => {
  const { getByTestId } = render(<FlightCard {...data} />);
  const card = getByTestId(TEST_ID);
  expect(card).toBeInTheDocument();
});

it('renders flight card with correct information', () => {
  const { getByText } = render(<FlightCard {...data} />);

  //check if flight id was rendered
  expect(getByText(data.id)).toBeInTheDocument();

  //check if origin and departure time was rendered
  expect(getByText(data.origin)).toBeInTheDocument();
  expect(getByText(data.readable_departure)).toBeInTheDocument();

  //check if destination and arrival time was rendered
  expect(getByText(data.destination)).toBeInTheDocument();
  expect(getByText(data.readable_arrival)).toBeInTheDocument();
});

it('flight card calls the correct function on click', () => {
  const onClick = jest.fn();

  const { getByTestId } = render(<FlightCard {...data} onSelect={onClick} />);
  const card = getByTestId(TEST_ID);

  fireEvent.click(card);
  expect(onClick).toHaveBeenCalled();
});
