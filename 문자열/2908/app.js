const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const n1 = Number(input[0].split('').reverse().join(''));
const n2 = Number(input[1].split('').reverse().join(''));

if (n1 > n2) {
  console.log(n1);
} else {
  console.log(n2);
}
