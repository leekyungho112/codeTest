const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const M = +input[0];
const N = +input[1];
let array = [];
let result = 0;
function solution(number) {
  if (number < 2) {
    return;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return;
    }
  }
  array.push(number);
  result = array.reduce((acc, cur) => acc + cur);
}

for (let i = M; i <= N; i++) {
  solution(i);
}
if (!array.length) {
  console.log(-1);
} else {
  console.log(result);
  console.log(array[0]);
}
