const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

let num = Number(input[0]);
for (let line = 1; line <= num; line++) {
  const star = line;
  const space = num - line;
  let print = '';
  for (let i = 0; i < space; i++) {
    print += ' ';
  }
  for (let i = 0; i < star; i++) {
    print += '*';
  }
  console.log(print);
}
