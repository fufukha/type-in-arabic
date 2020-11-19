import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { inputChar as inputCharAction } from '../../state/actions'
import { indexSelector } from '../../state/selectors'
import styles from './keyfield.css'

const Keyfield = ({ prompt }) => {
  const dispatch = useDispatch()
  const index = useSelector(indexSelector)

  const input = (
    <>
      <span>{prompt.substring(0, index)}</span>
      {prompt.substring(index)}
    </>
    )


  const handleOnKeydown = e => {
    if(e.key === ' ') e.preventDefault()
    dispatch(inputCharAction(e.key, new Date().getTime()))
  }

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeydown)
    return () => document.removeEventListener('keydown', handleOnKeydown)
  })

  return (
    <div className={styles.keyfield_container} onKeyDown={handleOnKeydown}>
      <div>{input}</div>
    </div>
  );
}

Keyfield.propTypes = {
  prompt: PropTypes.string.isRequired
};

export default Keyfield;
