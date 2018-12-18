function getArea(array) {
  var l1 = array[0]
  var l2 = array[1]
  if (array.length != 2) {
    return -1;
  }
  if (l1 == null || l2 == null) {
    return -1;
  }
  if (l1 % 1 !== 0 || l2 % 2 !== 0) { // check if int or float
    return -1;
  }
  if (l1 >= 0 && l2 >= 0) {
    return l1 * l2;
  } else {
    return -1;
  }
}

module.exports = getArea;
