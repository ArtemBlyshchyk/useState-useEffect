import css from "./Feedback.module.css";
const Feedback = ({ values }) => {
  return (
    <div className={css.feedbackContainers}>
      <p>Good: {values.good}</p>
      <p>Neutral: {values.neutral}</p>
      <p>Bad: {values.bad}</p>
    </div>
  );
};

export default Feedback;
