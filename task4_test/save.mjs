import { copyFile } from 'fs';
import Path from 'path';

const sourceFiles =  [
  Path.parse('./src/index.js'),
  Path.parse('./src/object.js'),
  Path.parse('./src/array.js'),
];
const dest = '../keypanic-ST2021Q3/custom-lodash/'; 
 
sourceFiles.forEach(file => {
  copyFile(Path.join(file.dir, file.base), Path.join(dest, file.base), (err) => {
    if(err) throw err;
    console.log(`${file.base} was copied`);
  });
});