export type KeySize = 'sm' | 'med' | 'lg' | 'xl'
export type KeyAlignment = 'left' | 'right' | 'center'
export type KeyZone = 'zone1' | 'zone2' | 'zone3' | 'zone4' | 'zone5' | 'zone6' | 'zone7'
type KeyLang = 'en' | 'ar'

interface KeyData {
  value: string
  keyName: string
  lang: KeyLang
  zone: KeyZone
  align: KeyAlignment
  size: KeySize
}

export type KeyProps = {
  data: KeyData
}