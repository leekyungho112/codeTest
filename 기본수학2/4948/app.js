const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();
const M = input.length;

function solution(number) {
  let number2 = number * 2;

  let isPrimeNumber = Array(number2 + 1).fill(true);
  isPrimeNumber[0] = isPrimeNumber[1] = false;
  for (let i = 2; i <= Math.ceil(Math.sqrt(number2)); i++) {
    if (isPrimeNumber[i]) {
      let m = 2;
      while (i * m <= number2) {
        isPrimeNumber[i * m] = false;
        m++;
      }
    }
  }
  let results = [];
  for (let i = number + 1; i <= number2; i++) {
    if (isPrimeNumber[i]) {
      results.push(i);
    }
  }
  console.log(results.length);
}

for (let i = 0; i < M; i++) {
  solution(+input[i]);
}
