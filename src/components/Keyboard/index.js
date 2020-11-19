import React from "react";
import Key from '../Key'

const Keyboard = () => {
  const qwerty = [
    'ذ', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠', '-', '=',
    'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د', '\\',
    'cap lock', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'return',
    'shift', 'ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ', 'shift',
    'space'
  ];

  const keys = qwerty.map((key, i) => (
      <Key key={i} value={key} />
    )
  )


  return (
    <div>
      {keys}
    </div>
  );
}

export default Keyboard;
