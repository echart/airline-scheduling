import PropTypes from 'prop-types';

export const List = ({ items = [], className = '' }) => {
  return (
    <ul className={`list ${className}`} data-testid="list">
      {items.map((item, index) => (
        <li className="list__item" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
};
