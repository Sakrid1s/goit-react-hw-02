import { useState } from 'react';
import './App.css';
import Description from './components/description/Description';
import Options from './components/options/Options';
import Feedback from './components/feedback/Feedback';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  return (
    <>
      <Description />
      <Options />
      <Feedback
        good={feedback.good}
        bad={feedback.bad}
        neutral={feedback.neutral}
      />
    </>
  );
}

export default App;
