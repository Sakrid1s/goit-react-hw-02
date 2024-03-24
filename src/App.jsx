import { useState } from 'react';
import './App.css';
import Description from './components/description/description';
import Options from './components/options/Options';

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
      <Feedback />
    </>
  );
}

export default App;
