const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('');

let obj = {};
for (let i = 0; i < input.length; i++) {
  let newChar = input[i].toUpperCase();
  if (obj[newChar]) {
    obj[newChar]++;
  } else {
    obj[newChar] = 1;
  }
}
let maxValue = -1;
let maxChar = '';
let isDuplicated = false;
for (const el in obj) {
  if (obj[el] > maxValue) {
    maxValue = obj[el];
    maxChar = el;
    isDuplicated = false;
  } else if (obj[el] === maxValue) {
    isDuplicated = true;
  }
}
if (isDuplicated) {
  console.log('?');
} else {
  console.log(maxChar);
}
