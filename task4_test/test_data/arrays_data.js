const arrays = {
  array_even: [1,2,3,4],
  array_even_not_sorted: [4,1,3,2],
  array_odd: [1,2,3,4,5],
  array_odd_not_sorted: [4,1,5,3,2],
  nested_array_even: [[1,2,3,4], [5,6,7,8]],
  nested_array_odd: [[1,2,3,4], [5,6,7,8], [9,10,11,12]],
  array_vars: [0, 1, false, 2, '', 3],
  not_array: 12,
  empty_array: [],
};

const collections = {

  users: {
    data: [
      { 'user': 'barney',  'age': 36, 'active': true },
      { 'user': 'fred',    'age': 40, 'active': false },
      { 'user': 'pebbles', 'age': 1,  'active': true }
    ],
    predicates: {
      ageLt: (prop) => prop.age < 40,
      nameFred: (prop) => prop.user === 'fred',
      notFound: (prop) => prop.user === "NOT_FOUND",
    }
  },

  map: {
    data: { 'user': 'barney',  'age': 36, 'active': true },
    predicates: {
      ageLt: (prop) => prop.age < 40,
      nameFred: (prop) => prop.user === 'barney',
      notFound: (prop) => prop.user === "NOT_FOUND",
    }
  },

  mixed: {
    data: [
      [2, 3, 4, 5, 6],
      [-2, 0, 4],
      { 'a': 4, 'b': 8 },
      { 'a': 10, 'b': 0, c: '11' },
      []
    ],
    predicates: {
      square: (prop) => prop * prop, 
    }
  },

};

const predicates = [
  function(o) { return o < 4},
  function(o) { return o > 4},
  function(o) { return o >= 5},
];

module.exports = {
  arrays: arrays,
  collections: collections,
  predicates: predicates,
}