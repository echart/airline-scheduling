import { render, fireEvent } from '@testing-library/react';
import { AircraftCard } from './AircraftCard';
import mock from '../../../__mocks__/aircraft';

const data = mock;

const TEST_ID = 'aircraft-card';
const CLASS_FULL = 'aircraft--full';

describe('testing aircraft card', () => {
  it('render aircraft card', () => {
    const { getByTestId } = render(<AircraftCard {...data} />);
    const card = getByTestId(TEST_ID);
    expect(card).toBeInTheDocument();
  });

  it('renders aircraft card with correct utilization class for full', () => {
    const { getByTestId } = render(
      <AircraftCard {...data} utilization={100} />
    );
    const card = getByTestId(TEST_ID);
    expect(card).toHaveClass(CLASS_FULL);
  });

  it('renders aircraft card and click call select function', () => {
    const onSelect = jest.fn();

    const { getByTestId } = render(
      <AircraftCard {...data} utilization={100} onSelect={onSelect} />
    );

    const card = getByTestId(TEST_ID);
    fireEvent.click(card);
    expect(onSelect).toHaveBeenCalled();
  });
});
