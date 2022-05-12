import PropTypes from 'prop-types';
import './Container.scss';

export const Container = ({
  title,
  className,
  children,
  hasPadding = false,
}) => (
  <section
    className={`container ${hasPadding && `container--padding`} ${className}`}
    data-testid="container"
  >
    {title && <h2 className="container__title">{title}</h2>}

    <div className="container__content">{children}</div>
  </section>
);

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
