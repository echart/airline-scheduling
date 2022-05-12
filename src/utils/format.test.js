import flightMock from '../__mocks__/flight';
import { formatTime, formatNumberToPercentage } from './format';

it('return the correct time value when using formatTime', () => {
  const departure = formatTime(flightMock.departuretime);
  const arrival = formatTime(flightMock.arrivaltime);

  expect(departure).toBe(flightMock.readable_departure);
  expect(arrival).toBe(flightMock.readable_arrival);
});

it('return the correct value when using formatNumberToPercentage', () => {
  const INITIAL = 36;
  const EXPECTED = '36%';

  const percentage = formatNumberToPercentage(INITIAL);
  expect(percentage).toBe(EXPECTED);
});
