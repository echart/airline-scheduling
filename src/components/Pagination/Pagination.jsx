import PropTypes from 'prop-types';
import Button from '../Button';
import './Pagination.scss';

export const Pagination = ({
  currentPage,
  total,
  onClickNext = () => null,
  onClickPrev = () => null,
}) => {
  if(!total) return;

  return (
    <div className="pagination">
      <Button className='prev' disabled={currentPage === 1} onClick={onClickPrev}>
        {'<'}
      </Button>
      <span>{currentPage} of {total}</span>
      <Button className='next' disabled={currentPage === total} onClick={onClickNext}>
        {'>'}
      </Button>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  onClickNext: PropTypes.func,
  onClickPrev: PropTypes.func,
};
