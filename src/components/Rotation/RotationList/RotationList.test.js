

import { render } from '@testing-library/react';
import { RotationList } from './RotationList';
import mock from '../../../__mocks__/flights';

const data = mock;

const TEST_ID = 'list';

it('render rotation list', () => {
  const { getByTestId } = render(<RotationList flights={data} />);
  const list = getByTestId(TEST_ID);
  expect(list).toBeInTheDocument();
});

it('renders list with correct size', () => {
  const { getByTestId } = render(<RotationList flights={data} />);
  const list = getByTestId(TEST_ID);
  expect(list.querySelectorAll('li')).toHaveLength(3);
});
