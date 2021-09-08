const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString();

const list = [];

for (let i = 97; i <= 122; i++) {
  list.push(input.indexOf(String.fromCharCode(i)));
}
console.log(list.join(' '));
