const _ = require('lodash');
const { ArrayLodash } = require('./src/array');
const { arrays: data, collections, predicates } = require('./test_data/arrays_data');
const random_data = require('./test_data/arrays.json');
const zip_data = require('./test_data/zip.json');
const includes_data = require('./test_data/includes.json');

describe('Chunk function', () => {

  test(`arrays (default n)`, () => {
    for(let case_name in data) {
      expect(ArrayLodash.chunk(data[case_name])).toEqual(_.chunk(data[case_name]));
    }
  });

  test('random arrays with n', () => {
    for(let obj of random_data) {
      expect(ArrayLodash.chunk(obj.array, obj.n)).toEqual(_.chunk(obj.array, obj.n));
    }
  });

});

describe('Compact function', () => {

  test(`arrays tests`, () => {
    for(let case_name in data) {
      expect(ArrayLodash.compact(data[case_name])).toEqual(_.compact(data[case_name]));
    }
  });

  test('random arrays', () => {
    for(let obj of random_data) {
      expect(ArrayLodash.compact(obj.array)).toEqual(_.compact(obj.array));
    }
  });

});

describe('Drop function', () => {

  test(`arrays (default n)`, () => {
    for(let case_name in data) {
      expect(ArrayLodash.drop(data[case_name])).toEqual(_.drop(data[case_name]));
    }
  });

  test('random arrays with n', () => {
    for(let obj of random_data) { 
      expect(ArrayLodash.drop(obj.array, obj.n)).toEqual(_.drop(obj.array, obj.n));
    }
  });

}); 

describe('Take function', () => {

  test(`arrays (default n)`, () => {
    for(let case_name in data) {
      expect(ArrayLodash.take(data[case_name])).toEqual(_.take(data[case_name]));
    }
  });

  test('random arrays with n', () => {
    for(let obj of random_data) { 
      expect(ArrayLodash.take(obj.array, obj.n)).toEqual(_.take(obj.array, obj.n));
    }
  });

}); 

describe('DropWhile function', () => {
 
  test(`arrays without predicate`, () => {
    for(let case_name in data) {
      expect(ArrayLodash.dropWhile(data[case_name])).toEqual(_.dropWhile(data[case_name]));
    }
  });

  test(`arrays wp`, () => {
    for(let case_name in data) {
      for(let pred of predicates) {
        expect(ArrayLodash.dropWhile(data[case_name], pred)).toEqual(_.dropWhile(data[case_name], pred));
      }
    }
  });

  test('random arrays wp', () => {
    for(let obj of random_data) { 
      for(let pred of predicates) {
        expect(ArrayLodash.dropWhile(obj.array, pred)).toEqual(_.dropWhile(obj.array, pred));
      }
    }
  });

});  

// add test for single object?
describe('Find function', () => {

  test(`arrays without predicate`, () => {
    for(let case_name in data) {
      expect(ArrayLodash.find(data[case_name])).toEqual(_.find(data[case_name]));
    }
  });

  test(`arrays wp`, () => {
    for(let case_name in data) {
      for(let pred of predicates) {
        expect(ArrayLodash.find(data[case_name], pred)).toEqual(_.find(data[case_name], pred));
      }
    }
  });

  test(`arrays wp + random negative index`, () => {
    for(let case_name in data) {
      for(let pred of predicates) {
        let index = Math.floor(-Math.random() * data[case_name].length);
        expect(ArrayLodash.find(data[case_name], pred, index)).toEqual(_.find(data[case_name], pred, index));
      }
    }
  });

  test('random arrays wp', () => {
    for(let obj of random_data) { 
      for(let pred of predicates) {
        expect(ArrayLodash.find(obj.array, pred, obj.n)).toEqual(_.find(obj.array, pred, obj.n));
      }
    }
  });

  test('collecions tests wp', () => {
    for(let col in collections) {
      for(let [key, predicate] of Object.entries(collections[col].predicates)) {
        expect(ArrayLodash.find(collections[col].data, predicate)).toEqual(_.find(collections[col].data, predicate));
      }
    }
  });

}); 

describe('Map function', () => {

  test(`arrays without predicate`, () => {
    for(let case_name in data) {
      expect(ArrayLodash.map(data[case_name])).toEqual(_.map(data[case_name]));
    }
  });

  test(`arrays wp`, () => {
    for(let case_name in data) {
      for(let pred of predicates) {
        expect(ArrayLodash.map(data[case_name], pred)).toEqual(_.map(data[case_name], pred));
      }
    }
  });

  test('random arrays wp', () => {
    for(let obj of random_data) { 
      for(let pred of predicates) {
        expect(ArrayLodash.map(obj.array, pred)).toEqual(_.map(obj.array, pred));
      }
    }
  });
  for(let col in collections) {

  test('collecions wp', () => {
      for(let [key, pred] of Object.entries(collections[col].predicates)) {
        expect(ArrayLodash.map(collections[col].data, pred)).toEqual(_.map(collections[col].data, pred));
      }
  });
}


}); 

describe('Zip function', () => {

  test(`single array argument`, () => {
    for(let case_name in data) {
      expect(ArrayLodash.zip(data[case_name])).toEqual(_.zip(data[case_name]));
    }
  });

  test('random arrays', () => {
    for(let arrays of zip_data) {
      expect(ArrayLodash.zip(...arrays)).toEqual(_.zip(...arrays));
    }
  });

});

describe('Includes function', () => {

  const includes_strings = includes_data['strings'];
  const includes_arrays = includes_data['arrays'];
  const includes_collection = includes_data['collection'];

  test('Includes string', () => {
    for(let obj of includes_strings) {
      expect(ArrayLodash.includes(obj.data, obj.search, obj.fromIndex)).toEqual(_.includes(obj.data, obj.search, obj.fromIndex));
    }
  });

  test('Includes array', () => {
    for(let obj of includes_arrays) {
      expect(ArrayLodash.includes(obj.data, obj.search, obj.fromIndex)).toEqual(_.includes(obj.data, obj.search, obj.fromIndex));
    }
  });

  test('Includes collection', () => {
    for(let obj of includes_collection) {
        expect(ArrayLodash.includes(obj.data, obj.search, obj.fromIndex)).toEqual(_.includes(obj.data, obj.search, obj.fromIndex));
      }
  });

});

