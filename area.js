
var array = [14, 2]
getArea(array)


function getArea(array) {
  var l1 = array[0]
  var l2 = array[1]
  if (l1 >= 0 && l2 >= 0) {
    console.log(l1 * l2)
    return l1 * l2;
  } else {
    console.log(-1)
    return -1;
  }
}
