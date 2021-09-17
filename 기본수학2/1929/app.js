const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const M = +input[0];
const N = +input[1];
let array = [];

function solution(num) {
  if (num < 2) {
    return;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return;
    }
  }
  array.push(num);
}

for (let i = M; i <= N; i++) {
  solution(i);
}
console.log(array.join('\n'));
