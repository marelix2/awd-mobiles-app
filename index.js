const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const csvWriter = createCsvWriter({
  path: 'output/out.csv',
  header: [
    { id: 'id', title: 'id' },
    { id: 'track_name', title: 'track_name' },
    { id: 'size_bytes', title: 'size_bytes' },
    { id: 'currency', title: 'currency' },
    { id: 'price', title: 'price' },
    { id: 'rating_count_tot', title: 'rating_count_tot' },
    { id: 'user_rating', title: 'user_rating' },
    { id: 'prime_genre', title: 'prime_genre' },
    { id: 'sup_devices.num', title: 'sup_devices.num' },
    { id: 'vpp_lic', title: 'vpp_lic' },
  ]
});

//id,track_name,size_bytes,currency,price,rating_count_tot,user_rating,ver,prime_genre,sup_devices.num,vpp_lic

const correctRows = []

const hasNotEmptyFields = row => {
  const keys = Object.keys(row).filter(notEmptyKey => notEmptyKey)
  return keys.map(key => !!row[key]).every(correct => correct)
}

const hasPriceHigherThanZero = price => price > 0
const hasSizeoHigherThanZeroBites = size => size > 0
const hasRatingLowerTankZero = rating  => rating > 0
const hasNoCategory = category => !!category
 
fs.createReadStream('data/test.csv')
  .pipe(csv())
  .on('data', (row) => {
    try {
      //perform the operation

      hasPriceHigherThanZero(row.price) ? '' : row.price = '0'
      hasSizeoHigherThanZeroBites(row['size_bytes']) ? '' : row['size_bytes'] = Math.floor(Math.random() * 100000) + 100000
      hasRatingLowerTankZero(row['rating_count_tot']) ? '' :row['rating_count_tot'] = '0'
      hasNoCategory(row['prime_genre']) ? '' : row['prime_genre'] = 'Utilities'
      
      hasNotEmptyFields(row) && correctRows.push(row)
    }
    catch (err) {
      //error handler
    }
  })
  .on('end', () => {
    //console.log(correctRows)
    //some final operation

    csvWriter
      .writeRecords(correctRows)
      .then(() => console.log('The CSV file was written successfully'));

  }); 

