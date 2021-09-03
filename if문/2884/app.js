const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

let h = Number(input[0]);
let m = Number(input[1]);

m -= 45;
if (m < 0) {
  m += 60;
  h -= 1;
}
if (h < 0) {
  h = 23;
}
console.log(h, m);
