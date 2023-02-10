import PropTypes from 'prop-types';
export const Feedback = ({ options, onLeaveFeedback }) => {
  const stateArr = Object.keys(options);
  // console.log(stateArr);

  return (
    <div>
      {stateArr.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.object,
  onLeaveFeedback: PropTypes.func,
};