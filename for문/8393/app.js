const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let num = Number(input[0]);
let result = 0;
for (let i = 1; i <= num; i++) {
  result = result + i;
}
console.log(result);
