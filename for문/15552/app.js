const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let num = Number(input[0]);
let answer = '';
for (let i = 1; i <= num; i++) {
  let numbers = input[i].split(' ');
  answer += Number(numbers[0]) + Number(numbers[1]) + '\n';
}
console.log(answer);
