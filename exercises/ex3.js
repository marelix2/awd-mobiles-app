const _ = require('lodash')
const quantile = require('compute-quantile')
const utils = require('./ex2')

const getBellow = array => quantile(array, 0.25) - 1.5 * utils.getIQR(array)
const getAbove = array => quantile(array, 0.75) + 1.5 * utils.getIQR(array)
const getIdentivied = (array, bellow, above) => {
  const b = array.filter(item => item < bellow)
  const a = array.filter(item => item > above)
  return [...b, ...a]
}

export const execute = correctRows => {

  const bitSize = correctRows.map(row => parseFloat(row['size_bytes']))
  const price = correctRows.map(row => parseFloat(row.price))
  const ratingQuantity = correctRows.map(row => parseFloat(row['rating_count_tot']))
  const rating = correctRows.map(row => parseFloat(row['user_rating']))
  const supportDevices = correctRows.map(row => parseFloat(row['sup_devices.num']))

  const bellowBitSize = getBellow(bitSize)
  const aboveBitSize = getAbove(bitSize)
  const identifiedBitSize = getIdentivied(bitSize, bellowBitSize, aboveBitSize)

  const bellowPrice = getBellow(price)
  const abovePrice = getAbove(price)
  const identifiedPrice = getIdentivied(price, bellowPrice, abovePrice)

  const bellowRatingQuantity = getBellow(ratingQuantity)
  const aboveRatingQuantity = getAbove(ratingQuantity)
  const identifiedRatingQuantity = getIdentivied(ratingQuantity, bellowRatingQuantity, aboveRatingQuantity)

  const bellowRating = getBellow(rating)
  const aboveRating = getAbove(rating)
  const identifiedRating = getIdentivied(rating, bellowRating, aboveRating)

  const bellowSupportDevices = getBellow(supportDevices)
  const aboveSupportDevices = getAbove(supportDevices)
  const identifiedSupportDevices = getIdentivied(supportDevices, bellowSupportDevices, aboveSupportDevices)

  console.log('bitSize',bellowBitSize, aboveBitSize, identifiedBitSize)
  console.log('price',bellowPrice, abovePrice, identifiedPrice)
  console.log('rating quantity',bellowRatingQuantity, aboveRatingQuantity, identifiedRatingQuantity)
  console.log('rating',bellowRating, aboveRating, identifiedRating)
  console.log('supported devices',bellowSupportDevices, aboveSupportDevices, identifiedSupportDevices)
}