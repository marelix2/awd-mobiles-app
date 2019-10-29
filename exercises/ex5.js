const  findLineByLeastSquares = (values_x, values_y) => {
  var sum_x = 0;
  var sum_y = 0;
  var sum_xy = 0;
  var sum_xx = 0;
  var count = 0;

  var x = 0;
  var y = 0;
  var values_length = values_x.length;

  if (values_length === 0) {
      return [ [], [] ];
  }

  values_x.forEach( (val, v) => {
    x = values_x[v];
    y = values_y[v];
    sum_x += x;
    sum_y += y;
    sum_xx += x*x;
    sum_xy += x*y;
    count++;
  })  

  var m = (count*sum_xy - sum_x*sum_y) / (count*sum_xx - sum_x*sum_x);
  var b = (sum_y/count) - (m*sum_x)/count;

  var result_values_x = [];
  var result_values_y = [];

  values_x.forEach( (val, v) => {
      x = values_x[v];
      y = x * m + b;
      result_values_x.push(x);
      result_values_y.push(y);
  })

  return [result_values_x, result_values_y];
}

export const execute = correctRows => {

  const bitSize = correctRows.map(row => parseFloat(row['size_bytes']))
  const price = correctRows.map(row => parseFloat(row.price))
  const ratingQuantity = correctRows.map(row => parseFloat(row['rating_count_tot']))
  const rating = correctRows.map(row => parseFloat(row['user_rating']))
  const supportDevices = correctRows.map(row => parseFloat(row['sup_devices.num']))

  // console.log(findLineByLeastSquares(bitSize, price))
  // console.log(findLineByLeastSquares(ratingQuantity, rating))
  // console.log(findLineByLeastSquares(supportDevices,rating))
}