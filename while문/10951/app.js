const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let i = 0;
let result = '';

while (i < input.length) {
  const inputs = input[i].split(' ');
  const a = Number(inputs[0]);
  const b = Number(inputs[1]);

  result += `${a + b}` + '\n';

  i++;
}
console.log(result);
