// Provide an object of ratings as an argument and it will return the average rating.
// Example: getAverageRating({ 1: 5, 4: 12, 5: 20 }); // 4.14

export default (ratings) => {
  var totalNumberRatings = 0;
  var sum = 0;
  for (var key in ratings) {
    totalNumberRatings += Number(ratings[key]);
    sum += ratings[key] * key;
  }
  return sum / totalNumberRatings;
};