const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

function solution(number) {
  let count = 0;
  for (let i = 1; i <= number; i++) {
    let hundredN = Math.floor((i % 1000) / 100);
    let tenN = Math.floor((i % 100) / 10);
    let oneN = Math.floor(i % 10);
    if (i < 100) {
      count++;
    } else if (100 <= i && i < 1000) {
      if (hundredN - tenN === tenN - oneN) {
        count++;
      }
    }
  }
  console.log(count);
}

solution(N);
