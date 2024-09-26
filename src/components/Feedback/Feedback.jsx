import css from "./Feedback.module.css";
import PropTypes from "prop-types";

const Feedback = ({ values, onTotalFeedback, onPositiveFeedback }) => {
  return (
    <ul className={css.feedbackContainers}>
      <li>Good: {values.good}</li>
      <li>Neutral: {values.neutral}</li>
      <li>Bad: {values.bad}</li>
      <li>Total: {onTotalFeedback}</li>
      <li>Positive: {onPositiveFeedback}%</li>
    </ul>
  );
};

Feedback.propTypes = {
  values: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onTotalFeedback: PropTypes.number.isRequired,
  onPositiveFeedback: PropTypes.number.isRequired,
};

export default Feedback;
