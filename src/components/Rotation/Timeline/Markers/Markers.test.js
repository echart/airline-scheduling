import { render } from '@testing-library/react';
import { Markers } from './Markers';

const TIMELINE_MARKERS = ['00:00', '06:00', '12:00', '18:00', '23:59'];

it('render timeline markers', () => {
  const { getByTestId } = render(<Markers />);
  const list = getByTestId('list');
  expect(list).toBeInTheDocument();
  expect(list).toHaveTextContent(TIMELINE_MARKERS[0]);
  expect(list.querySelectorAll('li')).toHaveLength(TIMELINE_MARKERS.length);
});
