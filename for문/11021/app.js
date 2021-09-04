const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let numbers = input[i].split(' ');

  console.log(`Case #${i} : ${Number(numbers[0]) + Number(numbers[1])}`);
}
