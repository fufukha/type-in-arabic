export const getQwertyData = () => {
  const qwerty = [
    'ذ', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠', '-', '=', 'Backspace',
    'Tab', 'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د', '\\',
    'CapsLock', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'Enter',
    'Shift', 'ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ', 'Shift',
    'opt-left', ' ', 'opt-right'
  ];

  const zone1 = ['ذ', '١', 'ض', 'ش', 'ئ',
                  '٠', '-', '=', 'ح', 'ج', 'د', '\\',
                  'ك', 'ط', 'ظ']
  const zone2 = ['٢', 'ص', 'س', 'ء',
                '٩', 'خ', 'م' ,'ز']
  const zone3 = ['٣','ث', 'ي', 'ؤ','٨', 'ه', 'ن', 'و']
  const zone4 = ['٤', 'ق', 'ب', 'ر',
                 '٥', 'ف', 'ل', 'لا']
  const zone5 = ['٦', 'غ', 'ا', 'ى',
                 '٧', 'ع', 'ت', 'ة']

  const data = new Array(qwerty.length)

  const getZone = key => {
    if(zone1.includes(key)) return 1
    if(zone1.includes(key)) return 1
    if(zone1.includes(key)) return 1
    if(zone2.includes(key)) return 2
    if(zone3.includes(key)) return 3
    if(zone4.includes(key)) return 4
    if(zone5.includes(key)) return 5
    return 6
  }

  const getValue = key => {
    if(key === 'Backspace') return 'delete'
    if(key === 'CapsLock') return 'caps lock'
    if(key === 'Tab' || key === 'Shift' || key === 'Enter' ) return key.toLowerCase()
    return key
  }


const getAlign = (i) => {
  const prev = qwerty[i - 1]
    if( prev === 'Backspace' || prev === '\\' || prev === 'Enter') {
      return 'left'
    } else if ( prev === '=' || prev === 'ط' || prev === 'ظ') {
      return 'right'
    }

  return 'center'
}

  const getSize = key => {
    if(key === 'Tab' || key === 'Backspace') return 'med'
    if(key === 'CapsLock' || key === 'Enter') return 'large'
    if(key === 'Shift') return 'xl'
    if(key === ' ') return 'space'
    if(key === 'opt-left') return 'optLeft'
    if(key === 'opt-right') return 'optRight'
    return 'sm'
  }

  qwerty.forEach((key, i) => {
    data[i] = {
      value: getValue(key),
      keyName: key,
      lang: /^[a-zA-Z]/.test(key) ? 'en' : 'ar',
      zone: getZone(key),
      align: getAlign(i),
      size: getSize(key)
    }
  })

  return data
}
