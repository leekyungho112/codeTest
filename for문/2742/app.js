const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let num = Number(input[0]);
let solution = '';
for (let i = num; i > 0; i--) {
  solution = solution + i + '\n';
}

console.log(solution);
