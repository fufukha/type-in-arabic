import Key from '../Key'
import { getQwertyData } from './qwerty'
import styles from './Keyboard.module.css'

const Keyboard: React.FC = () => {
  const qwerty = getQwertyData()

  const keys = qwerty.map((data, i) => <Key key={i} data={data} />)

  return (
    <div className={styles.keyboard}>
      {keys}
    </div>
  )
}

export default Keyboard
