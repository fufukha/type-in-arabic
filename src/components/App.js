import React, { useState } from "react";
import Keyfield from './Keyfield'
import { useSelector, useDispatch } from 'react-redux';
import isSessionCompletedSelector from '../state/selectors'
import { startSession as startSessionAction } from '../state/actions'

const App = () => {
  const [ isStarted, setIsStarted ] = useState(false)
  const prompt = "jkjkjk"

  const dispatch = useDispatch()
  const isSessionCompleted = useSelector(isSessionCompletedSelector)

  const handleOnClick = () => {
    setIsStarted(true)
    dispatch(startSessionAction(prompt))
  }

  return (
    <>
      {
        isStarted && !isSessionCompleted ?
        <Keyfield prompt={prompt} /> :
        <button onClick={handleOnClick}>Start</button>
      }
      {
        isSessionCompleted && <div>Good Job</div>
      }
    </>
  );
}

export default App;
