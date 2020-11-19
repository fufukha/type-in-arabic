import React, { useState } from "react"
import Keyfield from './Keyfield'
import Keyboard from './Keyboard'
import Stats from './Stats'
import { useSelector, useDispatch } from 'react-redux'
import {
  errorsSelector,
  cpmSelector,
  isSessionCompletedSelector,
 } from '../state/selectors'
import { startSession as startSessionAction } from '../state/actions'

const App = () => {
  const [ isStarted, setIsStarted ] = useState(false)
  const prompt = 'نتنت'

  const dispatch = useDispatch()
  const errors = useSelector(errorsSelector)
  const cpm = useSelector(cpmSelector)
  const isTaskCompleted = useSelector(isSessionCompletedSelector)

  const handleOnClick = () => {
    setIsStarted(true)
    dispatch(startSessionAction(prompt))
  }

  return (
    <>
      {isStarted && !isTaskCompleted && (
        <>
          <Stats errors={errors} cpm={cpm}/>
          <Keyfield prompt={prompt} />
          <Keyboard />
        </>
      )}

      {!isStarted && (
        <button onClick={handleOnClick}>Start</button>
      )}

      {isTaskCompleted && isStarted && (
        <>
          <div>Task completed</div>
          <Stats errors={errors} cpm={cpm}/>
        </>
      )}
    </>
  );
}

export default App;
