const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const a = Number(input[0]);

let result;

if (a % 4 === 0 && a % 100 !== 0) {
  result = 1;
} else if (a % 4 === 0 && a % 400 === 0) {
  result = 1;
} else {
  result = 0;
}

console.log(result);
