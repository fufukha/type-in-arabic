import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { charSelector } from '../../state/selectors'
import classnames from 'classnames'
import styles from './key.css'

const Key = ({ value }) => {
  const pressedKey = useSelector(charSelector)

  return (
    <div className={classnames({ [styles.pressed]: pressedKey === value })}>{value}</div>
  );
}

Key.propTypes = {
  value: PropTypes.string.isRequired
};

export default Key;
