const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

let N = BigInt(input[0]);
let M = BigInt(input[1]);
let sum = N + M;
console.log(sum.toString());
