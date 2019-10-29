const fs = require('fs');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const ex1 = require('./exercises/ex1')
const ex2 = require('./exercises/ex2')
const ex3 = require('./exercises/ex3')
const ex4 = require('./exercises/ex4')
const ex5 = require('./exercises/ex5')

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

const correctRows = []

const saveRecords = () => {
  csvWriter
    .writeRecords(correctRows)
    .then(() => console.log('The CSV file was written successfully'));
}

//-------------------------------------------------------------

const args = process.argv.slice(2)
const path = args[0] || 'data/AppleStore.csv'

fs.createReadStream(path)
  .pipe(csv())
  .on('data', (row) => {
    try {
      ex1.hasPriceHigherThanZero(row.price) ? '' : row.price = '0'
      ex1.hasSizeoHigherThanZeroBites(row['size_bytes']) ? '' : row['size_bytes'] = ex1.getRowBitSize()
      ex1.hasRatingLowerTankZero(row['rating_count_tot']) ? '' : row['rating_count_tot'] = '0'
      ex1.hasNoCategory(row['prime_genre']) ? '' : row['prime_genre'] = 'Utilities'
      ex1.hasSupportedDivicesLowerThanZero(row['sup_devices.num']) ?  row['sup_devices.num'] = '0' : ''
      ex1.hasNotEmptyFields(row) && correctRows.push(row)
    }
    catch (err) {
      console.error(err)
    }
  })
  .on('end', () => {

    ex2.execute(correctRows)
    ex3.execute(correctRows)
    ex4.execute(correctRows)
    ex5.execute(correctRows)

    saveRecords()
  });
