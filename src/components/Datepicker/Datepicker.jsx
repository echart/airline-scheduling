import PropTypes from 'prop-types';
import { formatDate } from '../../utils/format';
import './Datepicker.scss';

const getTomorrow = () => {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  return tomorrow;
};

export const Datepicker = ({
  date = getTomorrow(),
  onChangeDate = () => null,
}) => {
  console.log(date, formatDate(date));
  return (
    <input
      className="datepicker"
      type="date"
      name="rotation-day"
      value={formatDate(date)}
      onChange={() => null}
      disabled
    />
  );
};

Datepicker.propTypes = {
  date: PropTypes.string,
  onChangeDate: PropTypes.func,
};
