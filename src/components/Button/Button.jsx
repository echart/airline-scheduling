import PropTypes from 'prop-types';
import './Button.scss';

export const Button = ({
  type = 'button',
  onClick = () => null,
  className = '',
  children,
  testId = 'component-button',
  disabled = false,
}) => (
  <button
    type={type}
    data-testid={testId}
    onClick={onClick}
    className={`btn ${className}`}
    disabled={disabled}
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
  disabled: PropTypes.bool,
};
