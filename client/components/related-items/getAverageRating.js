export default (ratings) => {
  var totalNumberRatings = 0;
  var sum = 0;
  for (var key in ratings) {
    totalNumberRatings += Number(ratings[key]);
    sum += ratings[key] * key;
  }
  return sum / totalNumberRatings;
};