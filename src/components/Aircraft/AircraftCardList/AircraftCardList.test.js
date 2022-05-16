import { render } from '@testing-library/react';
import { AircraftCardList } from './AircraftCardList';

import AircraftMock from '../../../__mocks__/aircraft';

const aircrafts = [AircraftMock];
const TEST_ID = 'aircraft-list';

describe('testing aircraft card list', () => {
  it('render aircraft card list', () => {
    const { getByTestId } = render(
      <AircraftCardList
        aircrafts={aircrafts}
        active={aircrafts[0].id}
        onSelect={jest.fn()}
      />
    );
    const list = getByTestId(TEST_ID);
    expect(list).toBeInTheDocument();
  });

  it('renders aircraft card list with correct size', () => {
    const { getByTestId } = render(
      <AircraftCardList
        aircrafts={aircrafts}
        active={aircrafts[0].id}
        onSelect={jest.fn()}
      />
    );
    const list = getByTestId(TEST_ID);
    expect(list.querySelectorAll('li')).toHaveLength(aircrafts.length);
  });
});
