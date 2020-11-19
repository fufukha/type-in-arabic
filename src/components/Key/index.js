import React from "react";
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux'
import { charSelector } from '../../state/selectors'
import classnames from 'classnames'
import styles from './key.css'

const Key = ({ data }) => {
  const pressedKey = useSelector(charSelector)
  const { size, align, value, keyName, lang, zone } = data

  return (
    <div
      datalang={lang}
      className={classnames( styles.key,
        styles[`key_${size}`],
        styles[`key_${align}Align`],
        styles[`key_zone${zone}`],
        { [styles.pressed]: keyName === pressedKey }
    )}>
      {value}
    </div>
  );
}

Key.propTypes = {
  data: PropTypes.object.isRequired
};

export default Key;
