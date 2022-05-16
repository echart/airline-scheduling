import config from '../config/config';
import flights from '../__mocks__/flights';
import {
  getLastFlightFromRotation,
  isOnTheSameAirport,
  isTimeAvailable,
  getFlightDuration,
  getUtilization,
  willBeOnTheGroundAtMidnight,
} from './rotation';

const rotation = [flights[0], flights[1]];

describe('testing rotation utilities', () => {
  it('return the last item of rotation', () => {
    const lastItem = getLastFlightFromRotation(rotation);

    expect(lastItem.id).toBe(flights[1].id);
  });

  it('return true if is the same airport and false if not', () => {
    const sameAiport = isOnTheSameAirport(rotation, flights[2]);
    const notTheSame = isOnTheSameAirport(rotation, { origin: 'VCP' });

    expect(sameAiport).toBe(true);
    expect(notTheSame).toBe(false);
  });

  it('return if travel is possible ', () => {
    //time departure is on period of another travel
    const notAvailableDeparture = isTimeAvailable(rotation, {
      departuretime: getLastFlightFromRotation(rotation).departuretime + 10,
      arrivaltime: 28200,
    });

    //time departure is less than turnaround
    const notAvailableTurnaround = isTimeAvailable(rotation, {
      departuretime: getLastFlightFromRotation(rotation).arrivaltime + 1,
      arrivaltime: 35000,
    });

    const available = isTimeAvailable(rotation, {
      departuretime:
        getLastFlightFromRotation(rotation).arrivaltime +
        config.turnaround_time +
        10,
      arrivaltime: 3800,
    });

    expect(notAvailableDeparture).toBe(false);
    expect(notAvailableTurnaround).toBe(false);
    expect(available).toBe(true);
  });

  it('return the correct durantion', () => {
    const duration = getFlightDuration({
      departuretime: 2000,
      arrivaltime: 3000,
    });

    expect(duration).toBe(1000);
  });

  it('calculate the correct utilization of an aircraft', () => {
    const allDay = getUtilization([
      {
        departuretime: 0,
        arrivaltime: config.fullday_time - config.turnaround_time,
      },
    ]);

    const noFlights = getUtilization([]);
    const half = getUtilization([
      {
        departuretime: 0,
        arrivaltime: config.fullday_time / 2 - config.turnaround_time,
      },
    ]);

    expect(noFlights).toBe(0);
    expect(half).toBe(50.0);
    expect(allDay).toBe(100.0);
  });

  it('check if aircraft will be at ground at midnight', () => {
    const willBe = willBeOnTheGroundAtMidnight(flights[0]);
    const notWillBe = willBeOnTheGroundAtMidnight({
      id: 'AS8896',
      departuretime: 75600,
      arrivaltime: 88800,
      readable_departure: '21:00',
      readable_arrival: '00:40',
      origin: 'GMMX',
      destination: 'EGKK',
    });

    expect(willBe).toBe(true);
    expect(notWillBe).toBe(false);
  });
});
