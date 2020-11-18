import React, { useEffect } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { inputChar as inputCharAction } from '../../state/actions'

const Keyfield = ({ prompt }) => {
  const dispatch = useDispatch()

  const handleOnKeydown = e => {
    dispatch(inputCharAction(e.key, new Date().getTime()))
  }

  useEffect(() => {
    document.addEventListener('keydown', handleOnKeydown)
    return () => document.removeEventListener('keydown', handleOnKeydown)
  })

  return (
    <div onKeyDown={handleOnKeydown}>
      <div>{prompt}</div>
    </div>
  );
}

Keyfield.propTypes = {
  prompt: PropTypes.string.isRequired
};

export default Keyfield;
