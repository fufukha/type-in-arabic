import React from "react";
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { inputChar as inputCharAction } from '../../state/actions'

const Keyfield = ({ prompt }) => {
  const dispatch = useDispatch()

  const handleOnKeydown = e => {
    console.log(e.key)
    dispatch(inputCharAction(e.key))
  }

    return (
      <div>
        <input type="text" autoComplete="off" spellCheck="off" onKeyDown={handleOnKeydown}/>
        <div>{prompt}</div>
      </div>
    );
}


Keyfield.propTypes = {
  prompt: PropTypes.string.isRequired
};

export default Keyfield;