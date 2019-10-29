export const hasNotEmptyFields = row => {
  const keys = Object.keys(row).filter(notEmptyKey => notEmptyKey)
  return keys.map(key => !!row[key]).every(correct => correct)
}

export const hasPriceHigherThanZero = price => price > 0
export const hasSizeoHigherThanZeroBites = size => size > 0
export const hasRatingLowerTankZero = rating => rating > 0
export const hasNoCategory = category => !!category
export const hasSupportedDivicesLowerThanZero = devices => isNaN(parseInt(devices)) || devices < 0

export const getRowBitSize = () => Math.floor(Math.random() * 10000000) + 10000000

