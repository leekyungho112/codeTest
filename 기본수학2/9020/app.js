const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((n) => +n);

// 2부터 10000까지의 숫자 중 소수 구하기
const n = 2;
const m = 10000;
// 에라토스테네스의 체 사용
let prime = [];
for (let i = n; i <= m; i++) {
  prime[i] = i;
}
console.log(prime);
for (let i = 2; i <= m; i++) {
  if (prime[i] === 0) continue;
  for (let j = i + i; j <= m; j += i) {
    prime[j] = 0;
  }
}
prime = prime.filter((n) => n !== 0);

// 테스트케이스 하나씩 반복
for (let i = 0; i < input.length; i++) {
  // 골드바흐 파티션 구하기
  const num = Number(input[i]);
  // 가능한 골드바흐 파티션을 저장할 배열
  let answer = [];
  // 주어진 수의 절반보다 작은 소수만 탐색하면 됨
  for (let j = 0; prime[j] < num / 2 + 1; j++) {
    // (주어진 수 - 소수)가 소수인지
    const index = prime.indexOf(num - prime[j]);
    // 소수라면
    if (index !== -1) {
      // 골드바흐 파티션이므로 배열에 저장
      answer.push([prime[j], prime[index]]);
    }
  }
  // 골드바흐 파티션이 존재했다면
  if (answer.length !== 0) {
    // 가장 마지막 파티션을 가져옴 (두 소수의 차이가 가장 작음)
    const a = answer.pop();
    // 출력
    console.log(`${a[0]} ${a[1]}`);
  }
}

// const test = +input[0];
// let testCase = [];

// function solution(test) {
//   for (let index = 1; index <= test; index++) {
//     testCase.push(Number(input[index]));
//   }
// }

// solution(test);

// function prime_list(n) {
//   let sieve = [];
//   for (let i = 2; i < n; i++) {
//     sieve.push(true);
//   }
//   let m = parseInt(n ** 0.5, 10);
//   for (let i = 2; i < m + 1; i++) {
//     if (sieve[i] === true) {
//       for (let j = i + i; j < n; j += i) {
//         sieve[j] = false;
//       }
//     }
//   }
//   let list = [];
//   for (let i = 2; i < n; i++) {
//     if (sieve[i] === true) {
//       list.push(i);
//     }
//   }
//   return list;
// }

// const decimal = prime_list(10);

// const num = 10;
// let loop = 0;
// let partition = [];
// for (let n of decimal) {
//   if (decimal.includes(num - n)) {
//     partition.push([n, num - n]);
//   }
//   if (loop > parseInt(decimal.length / 2, 10)) {
//     break;
//   }
//   loop++;
// }
// // console.log(partition);
// let gap = partition.map((e) => e[1] - e[0]);

// let gapIndex = gap.indexOf(Math.min.apply(null, gap));

// console.log(partition[gapIndex].join(' '));
