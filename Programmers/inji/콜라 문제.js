// 빈병 2개 -> 콜라 1병, 빈병 <=2, 콜라못받음
// 빈병 20개는 몇병?
//20->10병,10병->5병, 4병->2병, 2병->1병, 1+1병->1병 => 19병
// 20-> 10 , 10->5 , 5->2 , 3->1 ,2->1 =>19

// 빈병 a개 주면 b병 받음, 빈병 n 개로 총 몇개?
function solution(a, b, n) {
  let answer = 0;
  let remain = 0;

  while (n >= a) {
    remain = n % a;
    n = Math.trunc(n / a) * b;
    answer = answer + n;
    n = n + remain;
  }
  return answer;
}
