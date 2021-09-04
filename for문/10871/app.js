const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let [num, num1] = input[0].split(' ').map((item) => Number(item));
let arrayA = input[1].split(' ').map((item) => Number(item));
let newArray = [];
for (let i = 0; i <= num; i++) {
  if (num1 > arrayA[i]) {
    newArray.push(arrayA[i]);
  }
}
console.log(newArray.join(' '));
