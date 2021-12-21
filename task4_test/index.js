const fs = require('fs');
const { generate_arrays } = require('./src/util');

let d1 = generate_arrays(100, 1);
let d2 = generate_arrays(100, 2);
let data = [...d1, ...d2].map(el => {
  let n = Math.round(Math.random() * el.length);
  return { array: el, n: n };
});

fs.writeFile('./test_data/array_data.json', JSON.stringify(data), 'utf-8', (err) => {
  if(err) console.log(err);
  else console.log('json saved');
})
 