type KeySize = 'sm' | 'med' | 'lg' | 'xl'
type KeyAlignment = 'left' | 'right' | 'center'
type KeyZone = 1 | 2 | 3 | 4 | 5 | 6
type KeyLang = 'en' | 'ar'

export interface KeyData {
  value: string
  keyName: string
  lang: KeyLang
  zone: KeyZone
  align: KeyAlignment
  size: KeySize
}
