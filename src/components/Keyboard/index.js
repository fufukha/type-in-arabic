import React from "react";
import Key from '../Key'
import styles from './keyboard.css'

const Keyboard = () => {
  const qwerty = [
    'ذ', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠', '-', '=', 'delete',
    'tab', 'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د', '\\',
    'caps lock', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'return',
    'shift-left', 'ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ', 'shift-right',
    'opt-left', 'space', 'opt-right'
  ];

  const keys = qwerty.map((key, i) => (
      <Key key={i} value={key} />
    )
  )


  return (
    <div className={styles.keyboard}>
      {keys}
    </div>
  );
}

export default Keyboard;
