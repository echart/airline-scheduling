import {
  getItemLeftPosition,
  getItemWidth,
  formatFlightAsTimelineItem,
} from './timeline';
import FlightMock from '../__mocks__/flight';

const TIMES = [0, 21600, 43200, 64800, 86400];

it('return the correct left position for the provided times', () => {
  const _00 = getItemLeftPosition(TIMES[0]);
  const _06 = getItemLeftPosition(TIMES[1]);
  const _12 = getItemLeftPosition(TIMES[2]);
  const _18 = getItemLeftPosition(TIMES[3]);
  const _24 = getItemLeftPosition(TIMES[4]);

  expect(_00).toBe(0); //initial position: 0%
  expect(_06).toBe(25); //1/4 = 25% of timeline
  expect(_12).toBe(50); //2/4 = 50% of timeline
  expect(_18).toBe(75); //3/4 = 75% of timeline
  expect(_24).toBe(100); //4/4 = 100% of timeline
});

it('return the correct width between two points for the provided times', () => {
  const _25 = getItemWidth(TIMES[0], TIMES[1]);
  const _50 = getItemWidth(TIMES[0], TIMES[2]);
  const _75 = getItemWidth(TIMES[0], TIMES[3]);
  const _100 = getItemWidth(TIMES[0], TIMES[4]);

  expect(_25).toBe(25); //0% to 25% = width must be 25%
  expect(_50).toBe(50); //0% to 50% = width must be 50%
  expect(_75).toBe(75); //0% to 75% = width must be 75%
  expect(_100).toBe(100); //0% to 100% = width must be 100%
});

it('return formatted timeline item', () => {
  const item = formatFlightAsTimelineItem(FlightMock);
  const left = getItemLeftPosition(FlightMock.departuretime);
  const width = getItemWidth(FlightMock.departuretime, FlightMock.arrivaltime);

  expect(item).toHaveProperty('left');
  expect(item.left).toBe(left);

  expect(item).toHaveProperty('width');
  expect(item.width).toBe(width);

  expect(item).toHaveProperty('isFlightItem');
  expect(item.isFlightItem).toBe(true);

  expect(item.id).toBe(FlightMock.id);
  expect(item.origin).toBe(FlightMock.origin);
  expect(item.destination).toBe(FlightMock.destination);
});
