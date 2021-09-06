const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = Number(input[0]);
const numbers = input[1].split(' ').map((x) => Number(x));

console.log(N);
console.log(numbers);

numbers.sort((a, b) => a - b);
console.log(numbers);
console.log(numbers[0], numbers[N - 1]);
