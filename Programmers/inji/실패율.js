// 실패율= 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
// 전체 n, 현재 스테이지 번호 배열 stages
// 실패율 높은 스테이지부터 내림차순으로 변경
// 1. 순서대로 변경
// 2. 인덱스 i까지 갯수 / 전체-인덱스=>실패율 배열 push
//

function solution(N, stages) {
  let fail_rate = [];
  let length = stages.length;
  for (let i = 1; i <= N; i++) {
    let player_num = stages.filter((stage) => stage === i).length;
    fail_rate.push({ stage: i, rate: player_num / length });
    length -= player_num;
  }
  return fail_rate.sort((a, b) => b.rate - a.rate).map((index) => index.stage);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
// 1,3,2,1,0

// function solution(N, stages) {
//     let answer = stages.sort((a, b) => a - b);
//     let fail_rate = ["" * N];
//     let check = 2;
//     let num = 1;
//     for (const value in answer) {
//       if (check == answer[value]) {
//         fail_rate.push(num);
//         check += 1;
//         num = 1;
//       }
//       if (check != answer[value]) {
//         num += 1;
//       }
//     }
//     return fail_rate;
//   }

// 비율을 구하고 나열하려하니까 복잡해짐 다시-> 40분 실패
// 각 스테이지별로 필터로 숫자 구하기-> 실패율 넣고 전체에서 숫자 빼고 N번

//   function solution(N, stages) {
//     let answer = stages.sort((a, b) => a - b);
//     let fail_rate = [];
//     let check = 0;
//     let length = answer.length;
//     for (let i = 1; i <= N; i++) {
//       let player_num = answer.filter((stage) => stage === i).length;
//       fail_rate.push(player_num / length);
//       length -= player_num;
//     }
//     return fail_rate.sort((a, b) => b - a);
//   }

// 각 스테이지를 rate 내림차순을 스테이지 숫자로 나타내야해서 객체로 저장해보기
