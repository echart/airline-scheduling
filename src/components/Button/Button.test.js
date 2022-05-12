/* eslint-disable */

import { render, fireEvent } from '@testing-library/react';
import { Button } from './Button';

const props = {
  className: 'primary',
  children: 'Text',
};

const TEST_ID = 'component-button';

it('render button', () => {
  const { getByTestId } = render(<Button {...props} />);
  const btn = getByTestId(TEST_ID);
  expect(btn).toBeInTheDocument();
});

it('renders button with custom className', () => {
  const { getByTestId } = render(<Button {...props} />);
  const btn = getByTestId(TEST_ID);
  expect(btn).toHaveClass(props.className);
});

it('renders button with correct text', () => {
  const { getByTestId } = render(<Button {...props} />);
  const btn = getByTestId(TEST_ID);
  expect(btn).toHaveTextContent(props.children);
});

it('renders button and when user click dispatch the correct action', () => {
  const onClick = jest.fn();
  const { getByTestId } = render(<Button {...props} onClick={onClick} />);

  const btn = getByTestId(TEST_ID);
  fireEvent.click(btn);
  expect(onClick).toHaveBeenCalled();
});
