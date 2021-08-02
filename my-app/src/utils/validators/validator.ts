export const required = (value: any) => {
  if (value) {
    return undefined
  }
  return 'поле обязательное...'
}

export const maxLengthCreator = (maxLength: any) => (value: any) => {
  if (value.length > maxLength) {
    return `не больше ${maxLength} символов`
  }
  return undefined
}
