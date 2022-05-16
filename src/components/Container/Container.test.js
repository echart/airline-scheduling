import { render } from '@testing-library/react';
import { Container } from './Container';

const TEST_ID = 'container';

const data = {
  className: 'test',
  title: 'Title',
  children: 'Lorem',
};
const TEST_ELEMENT = <p>Element</p>;

describe('testing container component', () => {
  it('render container component correctly', () => {
    const { getByTestId } = render(
      <Container
        title={data.title}
        className={data.className}
        children={data.children}
      />
    );

    const container = getByTestId(TEST_ID);

    expect(container).toHaveTextContent(data.children);
    expect(container).toHaveClass(data.className);
    expect(container.querySelector('h2')).toHaveTextContent(data.title);
  });

  it('render container component correctly when not passed a title', () => {
    const { getByTestId } = render(
      <Container className={data.className} children={data.children} />
    );

    const container = getByTestId(TEST_ID);

    expect(container).toHaveTextContent(data.children);
    expect(container).toHaveClass(data.className);
    expect(container.querySelector('h2')).toBeNull();
  });

  it('render container component correctly when passed a children Element', () => {
    const { getByTestId } = render(
      <Container className={data.className} children={TEST_ELEMENT} />
    );

    const container = getByTestId(TEST_ID);

    expect(container).toHaveClass(data.className);
    expect(container.querySelector('p')).toHaveTextContent('Element');
  });
});
