import XLSX from 'xlsx';

import fs from 'fs';

// Leer el archivo como buffer
const fileBuffer = fs.readFileSync('flota-celulares.xlsx');

// Convertir a binary string
const binaryStr = fileBuffer.toString('binary');

const workbook = XLSX.read(binaryStr, { type: 'binary' });

let first_sheet = workbook.Sheets['Flota'];
const test = XLSX.utils.sheet_to_json(first_sheet);

const teststring = JSON.stringify(test);

console.log(test);
console.log(test.length)
console.log(teststring);

// fs.writeFile('db.json', teststring, (err, result) => {
//   if (err) console.log(err);
// });
