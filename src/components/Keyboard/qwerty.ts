const qwerty: string[] = [
  'ذ', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '٠', '-', '=', 'Backspace',
  'Tab', 'ض', 'ص', 'ث', 'ق', 'ف', 'غ', 'ع', 'ه', 'خ', 'ح', 'ج', 'د', '\\',
  'CapsLock', 'ش', 'س', 'ي', 'ب', 'ل', 'ا', 'ت', 'ن', 'م', 'ك', 'ط', 'Enter',
  'Shift', 'ئ', 'ء', 'ؤ', 'ر', 'لا', 'ى', 'ة', 'و', 'ز', 'ظ', 'Shift',
  'opt-left', ' ', 'opt-right'
];

const zone1: string[] = ['ذ','١','٢' ,'ض', 'ش', 'ئ',
                '٠', '-', '=', 'ح', 'ج', 'د',
                'ك', 'ط', 'ظ']
const zone2: string[] = ['٣', 'ص', 'س', 'ء',
              '٩', 'خ', 'م' ,'ز']
const zone3: string[] = ['٤','ث', 'ي', 'ؤ','٨', 'ه', 'ن', 'و', ]
const zone4: string[] = ['٤', 'ق', 'ب', 'ر', '٦',
               '٥', 'ف', 'ل', 'لا']
const zone5: string[] = ['٦', 'غ', 'ا', 'ى',
               '٧', 'ع', 'ت', 'ة']
const zone6: string[] = [' ']

const getZone = (key: string) => {
 if(zone1.includes(key)) return 'zone1'
 if(zone2.includes(key)) return 'zone2'
 if(zone3.includes(key)) return 'zone3'
 if(zone4.includes(key)) return 'zone4'
 if(zone5.includes(key)) return 'zone5'
 if(zone6.includes(key)) return 'zone6'
 return 'zone7'
}

const getValue = (key: string) => {
  if(key === 'Backspace') return 'delete'
  if(key === 'CapsLock') return 'caps lock'
  if(key === 'Tab' || key === 'Shift' || key === 'Enter' ) return key.toLowerCase()
  return key
}

const getAlign = (index: number)  => {
  const prev = qwerty[index - 1]
  if( prev === 'Backspace' || prev === '\\' || prev === 'Enter') {
    return 'left'
  } else if ( prev === '=' || prev === 'ط' || prev === 'ظ') {
    return 'right'
  }

  return 'center'
}

const getSize = (key: string) => {
  if(key === 'Tab' || key === 'Backspace') return 'med'
  if(key === 'CapsLock' || key === 'Enter') return 'lg'
  if(key === 'Shift') return 'xl'
  if(key === ' ') return 'space'
  if(key === 'opt-left') return 'optLeft'
  if(key === 'opt-right') return 'optRight'
  return 'sm'
}

export const getQwertyData = () => {
  const data = new Array(qwerty.length)

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
