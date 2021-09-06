const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const result = input[0] * input[1] * input[2];
const charMap = {};
for (let num of result.toString()) {
  charMap[num] = charMap[num] ? charMap[num] + 1 : 1;
}

for (let i = 0; i < 10; i++) {
  if (charMap[i]) {
    console.log(charMap[i]);
  } else {
    console.log(0);
  }
}
