const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let idx = 0;
let max = 0;
for (let i = 0; i < input.length; i++) {
  if (Number(input[i]) > max) {
    max = Number(input[i]);
    idx = i + 1;
  }
}
console.log(max);
console.log(idx);
