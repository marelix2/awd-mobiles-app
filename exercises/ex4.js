const _ = require('lodash')

const getPearsonCorelation = (firstArray, secondArray) => {
  const n = firstArray.length
  const xy = firstArray.map((item, index) => item * secondArray[index]).reduce((res, item) => res + item, 0)
  const x = firstArray.reduce((res, item) => res + item, 0)
  const y = secondArray.reduce((res, item) => res + item, 0)
  const x2 = firstArray.reduce((res, item) => res + Math.pow(item,2), 0)
  const y2 = secondArray.reduce((res, item) => res + Math.pow(item,2), 0)

  const top = n * xy - x * y
  const bottom = Math.sqrt((n * x2 - Math.pow(x,2))*(n*y2 - Math.pow(y,2)))

  return top/bottom
}

export const execute = correctRows => {

  const bitSize = correctRows.map(row => parseFloat(row['size_bytes']))
  const price = correctRows.map(row => parseFloat(row.price))
  const ratingQuantity = correctRows.map(row => parseFloat(row['rating_count_tot']))
  const rating = correctRows.map(row => parseFloat(row['user_rating']))
  const supportDevices = correctRows.map(row => parseFloat(row['sup_devices.num']))

  const corelationBitSizePrice = getPearsonCorelation(bitSize, price)
  const corelationRatingQuantityRating = getPearsonCorelation(ratingQuantity, rating)
  const corelationRatingSupportDevices = getPearsonCorelation(rating, supportDevices)
  const corelationPriceRating = getPearsonCorelation(price,rating)

  console.log("corelationBitSizePrice", corelationBitSizePrice)
  console.log("corelationRatingQuantityRating",corelationRatingQuantityRating)
  console.log("corelationRatingSupportDevices",corelationRatingSupportDevices)
  console.log('corelationPriceRating',corelationPriceRating)
}