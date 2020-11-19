import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { charSelector } from '../../state/selectors'
import classnames from 'classnames'
import styles from './key.css'

const Key = ({ value }) => {
  const pressedKey = useSelector(charSelector)

  const isEn = () => value.match(/^[a-zA-Z]/);
  const isMedium = value === 'delete' || value === 'tab'
  const isLarge = value === 'caps lock' || value === 'return'
  const isRightAlign = value === 'delete' || value === 'return' || value.endsWith('right')
  const isLeftAlign = value === 'tab' || value === 'caps lock' || value.endsWith('left')
  const isBlank = value.startsWith('opt')
  const getValue = () => {
    if(value === 'space') return ''
    if(value.startsWith('shift')) return 'shift'
    return value
  }
  
  return (
    <div
      dataLang={isEn()? 'en' : 'ar'}
      className={classnames( styles.key,
      { [styles.key_med]: isMedium,
        [styles.key_large]: isLarge,
        [styles.key_xl]: value.startsWith('shift'),
        [styles.key_space]: value === 'space',
        [styles.key_optLeft]: value === 'opt-left',
        [styles.key_optRight]: value === 'opt-right',
        [styles.key_leftAlign]: isLeftAlign,
        [styles.key_rightAlign]: isRightAlign,
        [styles.key_blank]: isBlank,
        [styles.pressed]: pressedKey === value,
       }
    )}>
      {getValue()}
    </div>
  );
}

Key.propTypes = {
  value: PropTypes.string.isRequired
};

export default Key;
