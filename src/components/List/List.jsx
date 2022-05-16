import PropTypes from 'prop-types';

export const List = ({ items = [], className = '', itemClassName = '', id = 'list' }) => {
  return (
    <ul className={`list ${className}`} data-testid={id}>
      {items.map((item, index) => (
        <li className={`list__item ${itemClassName}`} key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  className: PropTypes.string,
  itemClassName: PropTypes.string,
};
