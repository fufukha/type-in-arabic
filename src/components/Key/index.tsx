import { KeyData } from './key-types'
import { useSelector } from 'react-redux'
import { charSelector } from '../../state/selectors'
import classnames from 'classnames'
import styles from "./Key.module.css";

type KeyProps ={
  data: KeyData
}

const Key: React.FC<KeyProps> = ({ data }) => {
  const pressedKey = useSelector(charSelector)
  const { size, align, value, keyName, lang, zone } = data

  return (
    <div
      lang={lang}
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

export default Key
