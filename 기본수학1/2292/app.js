const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const N = +input;

let range = 1;
let block = 1;

while (block < N) {
  block += 6 * range;
  range++;
}
console.log(range);
