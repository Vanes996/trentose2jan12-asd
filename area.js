function getArea(array) {
  var l1 = array[0]
  var l2 = array[1]

  if (array.length != 2) {
    return -1;
  }
  if (l1 == null || l2 == null) {
    return -1;
  }

  if (typeof l1 != 'number' || typeof l2 != 'number') { // check if int or float
    return -1;
  }
  if (!Number.isInteger(l1) || !Number.isInteger(l2)) {
    return -1
  }
  if (l1 >= 0 && l2 >= 0) {
    return l1 * l2;

  } else {
    console.log("sum")

    return -1;
  }
}

module.exports = getArea;
