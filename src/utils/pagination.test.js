import { calculateCurrentPage, calculateTotalPages } from './pagination';

describe('testing pagination utilities', () => {
  it('return the correct calculate for the current page', () => {
    const _1 = calculateCurrentPage(0);
    const _2 = calculateCurrentPage(20);
    const _3 = calculateCurrentPage(40);

    expect(_1).toBe(1);
    expect(_2).toBe(2);
    expect(_3).toBe(3);
  });

  it('return the correct value for total pages', () => {
    const total = calculateTotalPages(20, 1000);

    expect(total).toBe(50);
  });
});
