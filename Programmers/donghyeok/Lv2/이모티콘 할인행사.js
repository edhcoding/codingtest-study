// https://school.programmers.co.kr/learn/courses/30/lessons/150368

// users: 카카오톡 사용자 n명의 구매기준을 담는 2차원 배열 [비율, 가격], emoticons: 이모티콘 m개의 정가를 담은 1차원 배열
// return: 행사 목적을 최대한으로 달성했을 때의 이모티콘 플러스 서비스 가입 수와 이모티콘 매출액을 1차원 정수 배열에 담아 반환
function solution(users, emoticons) {
  const discountRates = [10, 20, 30, 40];
  let maxSubscribers = 0; // 최대 이모티콘 플러스 가입자 수
  let maxSales = 0; // 최대 이모티콘 판매액

  function dfs(index, discounts) {
    // 종료: 모든 이모티콘에 대해 할인 적용
    if (index === emoticons.length) {
      let subscribers = 0; // 이모티콘 플러스 가입자 수
      let totalSales = 0; // 이모티콘 판매액

      // 사용자별 구매 금액 계산
      users.forEach(([minDiscount, maxPrice]) => {
        let userTotal = 0; // 현재 사용자의 총 구매 금액

        discounts.forEach((discount, idx) => {
          if (discount >= minDiscount)
            userTotal += (emoticons[idx] * (100 - discount)) / 100;
        });

        // 플러스 서비스 가입 여부 확인
        if (userTotal >= maxPrice) {
          subscribers++;
          userTotal = 0;
        }
        totalSales += userTotal;
      });

      // 최댓값 갱신
      // 가입자 수가 최대 가입자 수보다 많거나, 가입자 수가 같고 판매액이 최대 판매액보다 많으면 갱신
      if (
        subscribers > maxSubscribers ||
        (subscribers === maxSubscribers && totalSales > maxSales)
      ) {
        maxSubscribers = subscribers;
        maxSales = totalSales;
      }

      return;
    }

    // 현재 이모티콘 (index)에 대해 할인 적용
    for (const rate of discountRates) {
      discounts[index] = rate;
      dfs(index + 1, discounts);
    }
  }

  // 모든 이모티콘에 대해 할인 적용
  dfs(0, new Array(emoticons.length).fill(0));

  return [maxSubscribers, maxSales];
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
); // [1, 5400]

console.log(
  solution(
    [
      [40, 2900],
      [23, 10000],
      [11, 5200],
      [5, 5900],
      [40, 3100],
      [27, 9200],
      [32, 6900],
    ],
    [1300, 1500, 1600, 4900]
  )
); // [4, 13860]
