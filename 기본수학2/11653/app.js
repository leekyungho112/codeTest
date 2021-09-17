const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let M = +input[0];

function solution(number) {
  let d = 2;
  while (number !== 1) {
    if (number % d === 0) {
      number /= d;
      console.log(d);
    } else {
      d++;
    }
  }
}

solution(M);
