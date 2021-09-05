const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let number = Number(input[0]);

console.log(number);
// 10의 자리
console.log(Math.floor(number / 10));
//1의 자리
console.log(number % 10);

let leftNumber = number;
let count = 0;
let newNumber = 0;
let isTrue = true;

while (isTrue) {
  let rightNumber = Math.floor(leftNumber / 10) + (leftNumber % 10);
  console.log('rightNumber:', rightNumber);
  console.log(('count:', count));
  newNumber = (leftNumber % 10) * 10 + (rightNumber % 10);
  console.log('newNumber', newNumber);
  leftNumber = newNumber;
  count++;
  if (number === newNumber) {
    isTrue = false;
  }
}
console.log(count);
