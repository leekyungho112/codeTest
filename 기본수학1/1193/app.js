const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

let N = +input;

let value = 1;

while (true) {
  N = N - value;
  if (N <= 0) {
    N = N + value;
    break;
  }
  value++;
}

if (value % 2 === 1) {
  console.log(`${value - (N - 1)}/${1 + (N - 1)}`);
} else {
  console.log(`${1 + (N - 1)}/${value - (N - 1)}`);
}
