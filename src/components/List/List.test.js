import { render } from '@testing-library/react';
import { List } from './List';

const TEST_ID = 'list';

const EMPTY_DATA = [];
const DATA = [0, 1, 2];

it('render list', () => {
  const { getByTestId } = render(<List items={DATA} />);
  const list = getByTestId(TEST_ID);
  expect(list).toBeInTheDocument();
});

it('renders list without break if empty array is passed', () => {
  const { getByTestId } = render(<List items={EMPTY_DATA} />);
  const list = getByTestId(TEST_ID);
  expect(list).toBeInTheDocument();
  expect(list.querySelectorAll('li')).toHaveLength(EMPTY_DATA.length);
});

it('renders list with correct size', () => {
  const { getByTestId } = render(<List items={DATA} />);
  const list = getByTestId(TEST_ID);
  expect(list.querySelectorAll('li')).toHaveLength(DATA.length);
});
