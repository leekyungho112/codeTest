const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = +input[0];
const numbers = input[1].split(' ').map((x) => Number(x));
let count = 0;
function solution(number) {
  if (number < 2) {
    return;
  }
  console.log('number:', number);
  for (let j = 2; j < number; j++) {
    if (number % j === 0) {
      return;
    }
  }
  count++;
}

for (let i = 0; i < N; i++) {
  solution(numbers[i]);
}
console.log(count);
