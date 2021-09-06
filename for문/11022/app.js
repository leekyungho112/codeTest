const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const num = Number(input[0]);

for (let i = 1; i <= num; i++) {
  let numbers = input[i].split(' ');
  let num1 = Number(numbers[0]);
  let num2 = Number(numbers[1]);
  console.log(`Case #${i} : ${num1} + ${num2} = ${num1 + num2}`);
}
