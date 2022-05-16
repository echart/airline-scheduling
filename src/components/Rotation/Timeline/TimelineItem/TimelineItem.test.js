import { render } from '@testing-library/react';
import { TimelineItem } from './TimelineItem';
import { item as data } from '../../../../__mocks__/timeline';
import { formatTime } from '../../../../utils/format';

const TEST_ID = 'timeline-item';
const CLASS_FLIGHT = 'timeline__item--flight';
const CLASS_TURNAROUND = 'timeline__item--turnaround';
const TEXT_TURNAROUND = 'Turnaround time';

describe('testing timeline item', () => {
  it('render timeline item', () => {
    const { getByTestId } = render(<TimelineItem {...data} />);
    const item = getByTestId(TEST_ID);
    expect(item).toBeInTheDocument();
  });

  it('render timeline item as a scheduled flight', () => {
    const { getByTestId } = render(<TimelineItem {...data} />);
    const item = getByTestId(TEST_ID);

    expect(item).toHaveClass(CLASS_FLIGHT);
    expect(item).toHaveTextContent(data.id);
    expect(item).toHaveTextContent(data.origin);
    expect(item).toHaveTextContent(data.destination);
    expect(item).toHaveTextContent(formatTime(data.departuretime));
    expect(item).toHaveTextContent(formatTime(data.arrivaltime));
  });

  it('render timeline item as a turnaround', () => {
    const { getByTestId } = render(
      <TimelineItem {...data} isFlightItem={false} />
    );
    const item = getByTestId(TEST_ID);

    expect(item).toHaveClass(CLASS_TURNAROUND);
    expect(item).toHaveTextContent(TEXT_TURNAROUND);
  });
});
