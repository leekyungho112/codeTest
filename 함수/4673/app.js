function d(num) {
  let sum = 0;
  const strNum = String(num);
  console.log('str', strNum);
  for (let i = 0; i < strNum.length; i++) {
    sum += +strNum[i];
    console.log('sum:', sum);
  }
  console.log('N+S', num + sum);
  return num + sum;
}

function solution() {
  const arr = new Array(101).fill(0);
  console.log('arr', arr);
  for (let i = 1; i <= 100; i++) {
    const ans = d(i);
    console.log('ans', ans);
    if (ans <= 100) {
      arr[ans]++;
      console.log('lastArr', arr);
    }
  }
  for (let i = 1; i <= 100; i++) {
    if (arr[i] === 0) {
      console.log('i', i);
    }
  }
}

solution();
