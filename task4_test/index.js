const fs = require('fs');
const { generate_arrays } = require('./src/util');
const _ = require('lodash');

const d1 = generate_arrays(150, 1);
const d2 = generate_arrays(150, 2);

const arrays = [...d1, ...d2].map(el => {
  let n = Math.round(Math.random() * el.length);
  if(Math.random() < .1) n = -n;
  return { array: el, n: n };
});

const zip_data = arrays.map(obj => {
  return _.chunk(obj.array, obj.n)
});

function write(path, data) {
  fs.writeFile(path, JSON.stringify(data), 'utf-8', (err) => {
    if(err) console.log(err);
    else console.log('json saved');
  });
}

write('./test_data/arrays.json', arrays);
write('./test_data/zip_data.json', zip_data);