import React from "react";
import Key from '../Key'
import { getQwertyData } from './qwerty'
import styles from './keyboard.css'

const Keyboard = () => {
  const qwerty = getQwertyData()
  console.log(qwerty)

  const keys = qwerty.map((data, i) => (
      <Key key={i} data={data} />
    )
  )


  return (
    <div className={styles.keyboard}>
      {keys}
    </div>
  );
}

export default Keyboard;
