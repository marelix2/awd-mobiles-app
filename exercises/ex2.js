const _ = require('lodash')
const quantile = require( 'compute-quantile' );

//2.A
export const getMinValue = array => _.min(array)
export const getMaxValue = array => _.max(array)

//2.B
export const getMean = array => _.mean(array)
export const getSD = array => {
  const mean = getMean(array)
  const variance = array.reduce((result, value) => result + Math.pow(value - mean, 2), 0) / array.length
  return Math.sqrt(variance)
}

//2.C
export const getMedian = array => {
  array.sort((a, b) => a - b)
  const half = Math.floor(array.length / 2)
  return array.length % 2 ? array[half] : (array[half - 1] + array[half]) / 2.0
}

//2.D
export const getIQR = array => {
  const median = getMedian(array)
  const firstQ = getMedian(array.filter(item => item <= median))
  const thrindQ = getMedian(array.filter(item => item > median))
  return thrindQ - firstQ
}

//2.E
const getLowQ = array => quantile(array, 0.1)
const getHighQ = array => quantile(array, 0.9)

export const execute = correctRows => {

    const bitSize = correctRows.map(row => parseFloat(row['size_bytes']))
    const price = correctRows.map(row => parseFloat(row.price))
    const ratingQuantity = correctRows.map(row => parseFloat(row['rating_count_tot']))
    const rating = correctRows.map(row => parseFloat(row['user_rating']))
    const supportDevices = correctRows.map(row => parseFloat(row['sup_devices.num']))

    //ex 2
    // min/max
    const minBitSize = getMinValue(bitSize)
    const maxBitSize = getMaxValue(bitSize)

    const minPrice = getMinValue(price)
    const maxPrice = getMaxValue(price)

    const minRatingQuantity = getMinValue(ratingQuantity)
    const maxRatingQuantity = getMaxValue(ratingQuantity)

    const minRating = getMinValue(rating)
    const maxRating = getMaxValue(rating)

    const minSupportedDevices = getMinValue(supportDevices)
    const maxSupportedDevices = getMaxValue(supportDevices)

    // mean/SD

    const meanBitSize = getMean(bitSize)
    const sdBitSize = getSD(bitSize)

    const meanPrice = getMean(price)
    const sdPrice = getSD(price)

    const meanRatingQuantity = getMean(ratingQuantity)
    const sdRatingQuantity = getSD(ratingQuantity)

    const meanRating = getMean(rating)
    const sdRating = getSD(rating)

    const meanSupportedDivices = getMean(supportDevices)
    const sdSupportedDivices = getSD(supportDevices)

    //median/IQR

    const medianBitSize = getMedian(bitSize)
    const IQRBitSize = getIQR(bitSize)

    const medianPrice = getMedian(price)
    const IQRPrice = getIQR(price)

    const medianRatingQuantity = getMedian(ratingQuantity)
    const IQRRatingQuantity = getIQR(ratingQuantity)

    const medianRating = getMedian(rating)
    const IQRRating = getIQR(rating)

    const medianSupportedDivices = getMedian(supportDevices)
    const IQRSupportedDivices = getIQR(supportDevices)

    // q 0.1/0.9

    const lowQBitSize = getLowQ(bitSize)
    const highQBitSize = getHighQ(bitSize)

    const lowQPrice = getLowQ(price)
    const highQPrice = getHighQ(price)

    const lowQRatingQuantity = getLowQ(ratingQuantity)
    const highQRatingQuantity = getHighQ(ratingQuantity)


    const lowQRating = getLowQ(rating)
    const highQRating = getHighQ(rating)

    const lowQSupportedDivices = getLowQ(supportDevices)
    const highQSupportedDivices = getHighQ(supportDevices)

    console.log(`bit size - min: ${minBitSize}, max ${maxBitSize}, mean: ${meanBitSize}, sd: ${sdBitSize}, median: ${medianBitSize}, IQR: ${IQRBitSize}, 0.1 q: ${lowQBitSize}, 0.9 q: ${highQBitSize}`)
    console.log(`price - min: ${minPrice}, max ${maxPrice}, mean: ${meanPrice} , sd: ${sdPrice}, median: ${medianPrice}, IQR: ${IQRPrice}, 0.1 q: ${lowQPrice}, 0.9 q: ${highQPrice}`)
    console.log(`rating quantity - min: ${minRatingQuantity}, max ${maxRatingQuantity}, mean: ${meanRatingQuantity}, sd: ${sdRatingQuantity}, median: ${medianRatingQuantity}, IQR: ${IQRRatingQuantity}, 0.1 q: ${lowQRatingQuantity}, 0.9 q: ${highQRatingQuantity}`)
    console.log(`user rating - min: ${minRating}, max ${maxRating}, mean: ${meanRating}, sd: ${sdRating}, median: ${medianRating}, IQR: ${IQRRating}, 0.1 q: ${lowQRating}, 0.9 q: ${highQRating}`)
    console.log(`support devices - min: ${minSupportedDevices}, max ${maxSupportedDevices}, mean: ${meanSupportedDivices}, sd: ${sdSupportedDivices}, median: ${medianSupportedDivices}, IQR: ${IQRSupportedDivices}, 0.1 q: ${lowQSupportedDivices}, 0.9 q: ${highQSupportedDivices}`)

}
