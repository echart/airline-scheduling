import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({
  type = 'button',
  onClick = () => null,
  className = '',
  children,
  testId = 'component-button'
}) => (
  <button
    type={type}
    data-testid={testId}
    onClick={onClick}
    className={`btn ${className}`}
  >
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['string', 'button']),
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  testId: PropTypes.string,
};
