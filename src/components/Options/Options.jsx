import css from "./Options.module.css";
import PropTypes from "prop-types";

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

Options.propTypes = {
  onUpdateFeedback: PropTypes.func.isRequired,
  onTotalFeedback: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Options;
