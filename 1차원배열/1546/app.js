const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
const score = input[1].split(' ');
console.log(score);
const maxScore = Math.max(...score);
console.log(maxScore);
const newScore = score.map((s) => (s / maxScore) * 100);
console.log(newScore);
const average = newScore.reduce((acc, cur) => acc + cur);
console.log(average);
console.log(average / N);
