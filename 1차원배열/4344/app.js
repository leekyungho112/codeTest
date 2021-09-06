const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

for (let i = 1; i <= +input[0]; i++) {
  const score = input[i].split(' ').map((x) => +x);

  const n = score.shift();

  console.log('n:', n);
  const average = score.reduce((acc, cur) => acc + cur) / n;
  console.log('avg', average);
  const result = score.filter((x) => x > average).length;
  console.log('result:', result);
  console.log(`${((result / n) * 100).toFixed(3)}%`);
}
