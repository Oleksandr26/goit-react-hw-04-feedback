import PropTypes from 'prop-types';
import s from './Feedback.module.css';
import shortid from 'shortid';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.buttonsList}>
      {options.map(option => (
        <li key={shortid.generate()} className={s.buttonsItem}>
          <button
            onClick={() => onLeaveFeedback(option)}
            type="button"
            className={s.button}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
