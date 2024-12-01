// a: 마트에 주어야 하는 빈 병 개수
// b: 마트가 주는 새 콜라 개수
// n: 현재 가지고 있는 빈 병 개수 (초기값)
function solution(a, b, n) {
  let answer = 0;
  let emptyBottle = n; // 변수 정의: 빈 병 개수

  // 내가 가지고 있는 빈병은 마트에 줘야 하는 빈병 수 보다는 같거나 커야함
  while (emptyBottle >= a) {
    // 현재 가진 빈 병으로 받을 수 있는 콜라의 수 계산
    const newColas = Math.floor(emptyBottle / a) * b;
    answer += newColas;

    // 남은 빈 병 계산 (새로 받은 콜라의 빈 병 + 교환하고 남은 빈 병)
    emptyBottle = newColas + (emptyBottle % a);
  }

  return answer;
}
