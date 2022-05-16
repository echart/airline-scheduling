import flights from '../../__mocks__/flights';
import {
  addIntoRotation,
  findById,
  removeFlightFromArray,
} from './useScheduler.operations';

describe('testing useScheduler operations', () => {
  it('remove flight from array correctly', () => {
    const rotation = flights;
    expect(rotation).toHaveLength(3);

    const newRotation = removeFlightFromArray(rotation, flights[0].id);
    expect(newRotation).toHaveLength(2);
    expect(!!newRotation.find((item) => item.id === flights[0].id)).toBe(false);
  });

  it('add into rotation correctly', () => {
    const rotation = [];
    const newRotation = addIntoRotation(rotation, flights[0]);
    expect(newRotation).toHaveLength(1);
    expect(!!newRotation.find((item) => item.id === flights[0].id)).toBe(true);
  });

  it('find item by id correctly', () => {
    const id = flights[0].id;
    const rotation = flights;
    const item = findById(rotation, id);
    expect(item.id).toBe(id);
  });
});
