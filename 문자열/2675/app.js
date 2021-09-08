const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const T = +input[0];

for (let i = 1; i <= T; i++) {
  let ans = '';
  const [R, S] = input[i].split(' ');

  for (let j = 0; j < S.length; j++) {
    for (let k = 0; k < R; k++) {
      ans += S[j];
    }
  }
  console.log(ans);
}
