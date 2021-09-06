const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const arrayNum = [];

input.forEach((num) => {
  const number = num % 42;
  if (arrayNum.indexOf(number) === -1) {
    arrayNum.push(number);
  }
});
console.log(arrayNum.length);
