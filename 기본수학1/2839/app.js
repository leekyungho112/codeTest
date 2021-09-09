const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

let N = +input;
let count = 0;

while (true) {
  if (N % 5 === 0) {
    console.log(N / 5 + count);
    break;
  } else if (N <= 0) {
    console.log(-1);
    break;
  }
  N = N - 3;
  count++;
}
