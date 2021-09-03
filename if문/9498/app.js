const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const a = Number(input[0]);

let result;

if (100 >= a && a >= 90) {
  result = 'A';
} else if (90 > a && a >= 80) {
  result = 'B';
} else if (80 > a && a >= 70) {
  result = 'C';
} else if (70 > a && a >= 60) {
  result = 'D';
} else {
  result = 'F';
}

console.log(result);
