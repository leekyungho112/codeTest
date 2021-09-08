const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let S = input[0];
const RegExp = /c\=|c\-|dz\=|d\-|lj|nj|s\=|z\=/g;
const answer = S.replace(RegExp, ' ');
console.log(answer.length);
