const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const A = +input[0];
const B = +input[1];
const C = +input[2];

let s = C - B;
let count = Math.floor(A / s) + 1;

console.log(s <= 0 ? -1 : count);
