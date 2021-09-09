const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = input.shift();

for (let i = 0; i < N; i++) {
  const k = input.shift();
  const n = input.shift();
  const newArray = [];
  for (let i = 0; i <= k; i++) {
    newArray.push([1]);
    for (let j = 1; j < n; j++) {
      if (i === 0) {
        newArray[i].push(j + 1);
      } else {
        newArray[i].push(newArray[i][j - 1] + newArray[i - 1][j]);
      }
    }
  }
  const f = k;
  const r = n - 1;
  console.log(newArray[f][r]);
}
