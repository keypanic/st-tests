const random = (n = 1) => Math.floor(Math.random() * n);

function getArray(length, deep, max_element) {
  if(deep <= 0) return random(max_element);
  let array = [];
  for(let i = 0; i < length; i++) {
    if(Math.random() > .5) {
      array[i] = getArray(length, deep - 1, max_element);
    } else {
      array[i] = random(max_element);
    }
  } 
  return array;
}

function generate_arrays(number_of_arrays = 10, deep = 1, max_array_length = 15, max_element = 100) {
  let result = [];  
  for(let i = 0; i < number_of_arrays; i++) {
    let length = random(max_array_length);
    let array = getArray(length, deep, max_element);
    result.push(array);
  }
  return result;
}

module.exports = {
  generate_arrays
}