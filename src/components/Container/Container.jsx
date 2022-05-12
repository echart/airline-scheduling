import PropTypes from 'prop-types';
import './Container.scss';

const Container = ({ title, className, children }) => (
  <section className={`container ${className}`}>
    <h2 className="container__title">{title}</h2>

    {children}
  </section>
);

Container.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default Container;
