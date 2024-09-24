import css from "./Options.module.css";
const Options = ({ onUpdateFeedback, onTotalFeedback, onReset }) => {
  return (
    <div className={css.btnContainer}>
      <button onClick={() => onUpdateFeedback("good")}>Good</button>
      <button onClick={() => onUpdateFeedback("neutral")}>Neutral</button>
      <button onClick={() => onUpdateFeedback("bad")}>Bad</button>
      {onTotalFeedback !== 0 && <button onClick={onReset}>Reset</button>}
    </div>
  );
};

export default Options;
