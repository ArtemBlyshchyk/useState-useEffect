import css from "./Feedback.module.css";
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

export default Feedback;
