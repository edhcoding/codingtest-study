// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 문제:  폰켓몬의 종류 번호가 담긴 배열 nums가 매개변수로 주어질 때, N/2마리의 폰켓몬을 선택하는 방법 중,
// 가장 많은 종류의 폰켓몬을 선택하는 방법을 찾아, 그때의 폰켓몬 종류 번호의 개수를 return 하도록 solution 함수를 완성해주세요.

function solution(nums) {
  const canTake = nums.length / 2; // 가져가려는 폰켓몬 수
  const uniqueCount = new Set(nums).size; // 종류 수

  return Math.min(uniqueCount, canTake); // 종류 수와 가져가려는 폰켓몬 수 중 작은 값이 최대 종류 수
}

// 다른 사람 풀이
function solution2(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

console.log(solution([3, 1, 2, 3])); // 2
console.log(solution([3, 3, 3, 2, 2, 4])); // 3
console.log(solution([3, 3, 3, 2, 2, 2])); // 2
