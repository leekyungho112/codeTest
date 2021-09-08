const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = input[0];
let sum = 0;
for (let i = 0; i < N; i++) {
  const strN = String(input[1][i]);
  sum += +strN;
}
console.log(sum);
