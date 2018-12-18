const getArea = require('../area.js')
var array

test('no values', () => {
  array = []
  expect(getArea(array)).toBe(-1)
})

test('[0,2]', () => {
  array = [0, 2]
  expect(getArea(array)).toBe(0)
})

test('[2,2]', () => {
  array = [2, 2]
  expect(getArea(array)).toBe(4)
})

test('3 int', () => {
  array = [2, 2, 2]
  expect(getArea(array)).toBe(-1)
})

test('1 int', () => {
  array = [1]
  expect(getArea(array)).toBe(-1)
})

test('2 int < 0', () => {
  array = [-2, -12]
  expect(getArea(array)).toBe(-1)
})

test('1 int,1 int < 0', () => {
  array = [2, -12]
  expect(getArea(array)).toBe(-1)
})

test('2 float', () => {
  array = [2.2, 2.1]
  expect(getArea(array)).toBe(-1)
})

test('1 int, 1 float', () => {
  array = [2, 2.1]
  expect(getArea(array)).toBe(-1)
})

test('2 char', () => {
  array = ['a', 'b']
  expect(getArea(array)).toBe(-1)
})

test('1 int, 1 char', () => {
  array = [1, 'a']
  expect(getArea(array)).toBe(-1)
})

test('1 char, 1 int ', () => {
  array = ['a', 1]
  expect(getArea(array)).toBe(-1)
})

test('2 string', () => {
  array = ["asd", "bsd"]
  expect(getArea(array)).toBe(-1)
})

test('1 int, 1 string', () => {
  array = [1, "bsd"]
  expect(getArea(array)).toBe(-1)
})

test('1 string, 1 int', () => {
  array = ["bsd", 1]
  expect(getArea(array)).toBe(-1)
})

test('2 null', () => {
  array = [null, null]
  expect(getArea(array)).toBe(-1)
})

test('1 null, 1 int', () => {
  array = [null, 2]
  expect(getArea(array)).toBe(-1)
})

test('incomplete array', () => {
  array = [1, ]
  expect(getArea(array)).toBe(-1)
})

test('object', () => {
  array = {a:1,b:2}
  expect(getArea(array)).toBe(-1)
})

test('two pars instead of one', () => {
  array=[[2, 3], 5]
  expect(getArea(array)).toBe(-1)
});
