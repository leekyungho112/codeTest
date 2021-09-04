const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const num = Number(input[0]);
let solution = '';
for (let i = 1; i <= num; i++) {
  solution = solution + i + '\n';
}
console.log(solution);
