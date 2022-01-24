const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

// const test = +input[0];
// let testCase = [];

// function solution(test) {
//   for (let index = 1; index <= test; index++) {
//     testCase.push(Number(input[index]));
//   }
//   console.log(test, testCase);
// }

// solution(test);

function prime_list(n) {
  let sieve = [];
  for (let i = 2; i < n; i++) {
    sieve.push(true);
  }
  let m = parseInt(n ** 0.5, 10);
  for (let i = 2; i < m + 1; i++) {
    if (sieve[i] === true) {
      for (let j = i + i; j < n; j += i) {
        sieve[j] = false;
      }
    }
  }
}

let decimal = [];
let isDecimal = true;

const num = 100;
let loop = 0;
let partition = [];
for (let n of decimal) {
  if (decimal.includes(num - n)) {
    partition.push([n, num - n]);
  }
  if (loop > parseInt(decimal.length / 2, 10)) {
    break;
  }
  loop++;
}
