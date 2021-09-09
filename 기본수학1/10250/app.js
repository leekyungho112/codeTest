const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const N = input[0];

for (let i = 1; i <= N; i++) {
  const sum = input[i].split(' ');

  let H = Number(sum[0]);
  let N = Number(sum[2]);
  let count = 1;
  while (N > H) {
    N = N - H;
    count++;
  }
  if (count < 10) {
    console.log(`${N}0${count}`);
  } else {
    console.log(`${N}${count}`);
  }
}
