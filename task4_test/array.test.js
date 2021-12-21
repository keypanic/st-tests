const _ = require('lodash/array');
const { ArrayLodash } = require('./src/array');
const random_data = require('./test_data/array_data.json');

const data = {
  array_even: [1,2,3,4],
  array_even_not_sorted: [4,1,3,2],
  array_odd: [1,2,3,4,5],
  array_odd_not_sorted: [4,1,5,3,2],
  nested_array_even: [[1,2,3,4], [5,6,7,8]],
  nested_array_odd: [[1,2,3,4], [5,6,7,8], [9,10,11,12]],
  array_vars: [0, 1, false, 2, '', 3],
  not_array: 12,
}
 

describe('Test chunk function', () => {

  for(let case_name in data) {
    test(`Chunk ${case_name}`, () => {
      expect(ArrayLodash.chunk(data[case_name])).toEqual(_.chunk(data[case_name]));
    })
  }

  for(let obj of random_data) {
    test('Chunk random data', () => {
      expect(ArrayLodash.chunk(obj.array, obj.n)).toEqual(_.chunk(obj.array, obj.n));
    });
  }

});

describe('Test compact function', () => {

  for(let case_name in data) {
    test(`Compact ${case_name}`, () => {
      expect(ArrayLodash.compact(data[case_name])).toEqual(_.compact(data[case_name]));
    })
  }

  for(let obj of random_data) {
    test('Compact random data', () => {
      expect(ArrayLodash.compact(obj.array)).toEqual(_.compact(obj.array));
    });
  }

});

describe('Test drop function', () => {

  for(let case_name in data) {
    test(`Drop ${case_name}`, () => {
      expect(ArrayLodash.drop(data[case_name])).toEqual(_.drop(data[case_name]));
    })
  }

  for(let obj of random_data) { 
    test('Drop random data', () => {
      expect(ArrayLodash.drop(obj.array, obj.n)).toEqual(_.drop(obj.array, obj.n));
    });
  }

}); 