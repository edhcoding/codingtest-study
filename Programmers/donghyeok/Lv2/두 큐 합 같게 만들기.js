function solution(queue1, queue2) {
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);

  const total = sum1 + sum2;

  if (total % 2 !== 0) return -1;

  const half = Math.floor(total / 2);
  const queue = [...queue1, ...queue2];

  let left = 0;
  let right = queue1.length;
  let count = 0;

  while (count <= queue1.length * 3) {
    if (sum1 === half) return count;

    if (sum1 > half) {
      sum1 -= queue[left];
      left++;
    } else {
      sum1 += queue[right];
      right++;
    }

    count++;
  }

  return -1;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1])); // 2
console.log(solution([1, 2, 1, 2], [1, 10, 1, 2])); // 7
console.log(solution([1, 1], [1, 5])); // -1
