const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  let count = 0;
  let sum = 0;
  const score = [...input[i]];
  for (let j = 0; j < input[i].length; j++) {
    if (score[j] === 'O') {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}
