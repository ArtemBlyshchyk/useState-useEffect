import { useEffect, useState } from "react";
import Description from "./components/Description/Description.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import Options from "./components/Options/Options.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  //FIRST VARIANT
  // const updateGood = () => {
  //   setFeedback({
  //     ...feedback,
  //     good: feedback.good + 1,
  //   });
  // };
  // const updateNeutral = () => {
  //   setFeedback({
  //     ...feedback,
  //     neutral: feedback.neutral + 1,
  //   });
  // };
  // const updateBad = () => {
  //   setFeedback({
  //     ...feedback,
  //     bad: feedback.bad + 1,
  //   });
  // };

  //SECOND VARIANT
  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback =
    totalFeedback !== 0
      ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
      : 0;

  const handleReset = () => {
    setFeedback(initialFeedback);
  };

  //Saved the collected feedback to LocalStorage
  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <>
      <Description />
      <Options
        onUpdateFeedback={updateFeedback}
        onTotalFeedback={totalFeedback}
        onReset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          values={feedback}
          onTotalFeedback={totalFeedback}
          onPositiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
