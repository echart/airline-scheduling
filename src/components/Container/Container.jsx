import PropTypes from 'prop-types';
import './Container.scss';

export const Container = ({ title, className, children }) => (
  <section className={`container ${className}`} data-testid="container">
    {title && <h2 className="container__title">{title}</h2>}

    <div className="container__content">{children}</div>
  </section>
);

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
