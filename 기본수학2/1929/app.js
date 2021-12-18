const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split(' ');

const [n, m] = input
  .shift()
  .split(' ')
  .map((e) => parseInt(e));
const arr = Array.from(Array(m + 1).keys());
for (let i = 2; i <= Math.sqrt(m); i++) {
  if (arr[i]) for (let j = i * i; j <= m; j += i) arr[j] = false;
}
arr.splice(0, 2, false, false);
for (let i = n; i <= m; i++) {
  if (arr[i]) console.log(arr[i]);
}
