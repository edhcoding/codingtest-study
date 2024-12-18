/**
 * https://school.programmers.co.kr/learn/courses/30/lessons/72411
 * [문제 설명]
 * 레스토랑을 운영하던 스카피는 코로나19로 인한 불경기를 극복하고자 메뉴를 새로 구성하려고 고민하고 있습니다.
 * 기존에는 단품으로만 제공하던 메뉴를 조합해서 코스요리 형태로 재구성해서 새로운 메뉴를 제공하기로 결정했습니다.
 * 어떤 단품메뉴들을 조합해서 코스요리 메뉴로 구성하면 좋을 지 고민하던 "스카피"는 이전에 각 손님들이 주문할 때 가장 많이 함께 주문한 단품메뉴들을 코스요리 메뉴로 구성하기로 했습니다.
 * 단, 코스요리 메뉴는 최소 2가지 이상의 단품메뉴로 구성하려고 합니다. 또한, 최소 2명 이상의 손님으로부터 주문된 단품메뉴 조합에 대해서만 코스요리 메뉴 후보에 포함하기로 했습니다.
 *
 * 예를 들어, 손님 6명이 주문한 단품메뉴들의 조합이 다음과 같다면,
 * (각 손님은 단품메뉴를 2개 이상 주문해야 하며, 각 단품메뉴는 A ~ Z의 알파벳 대문자로 표기합니다.)
 *
 * 손님 번호	주문한 단품메뉴 조합
 * 1번 손님	A, B, C, F, G
 * 2번 손님	A, C
 * 3번 손님	C, D, E
 * 4번 손님	A, C, D, E
 * 5번 손님	B, C, F, G
 * 6번 손님	A, C, D, E, H
 *
 * 가장 많이 함께 주문된 단품메뉴 조합에 따라 "스카피"가 만들게 될 코스요리 메뉴 구성 후보는 다음과 같습니다.
 *
 * 코스 종류	메뉴 구성	설명
 * 요리 2개 코스	A, C	1번, 2번, 4번, 6번 손님으로부터 총 4번 주문됐습니다.
 * 요리 3개 코스	C, D, E	3번, 4번, 6번 손님으로부터 총 3번 주문됐습니다.
 * 요리 4개 코스	B, C, F, G	1번, 5번 손님으로부터 총 2번 주문됐습니다.
 * 요리 4개 코스	A, C, D, E	4번, 6번 손님으로부터 총 2번 주문됐습니다.
 *
 * [문제]
 * 각 손님들이 주문한 단품메뉴들이 문자열 형식으로 담긴 배열 orders, "스카피"가 추가하고 싶어하는 코스요리를 구성하는 단품메뉴들의 갯수가 담긴 배열 course가 매개변수로 주어질 때,
 * "스카피"가 새로 추가하게 될 코스요리의 메뉴 구성을 문자열 형태로 배열에 담아 return 하도록 solution 함수를 완성해 주세요.
 *
 * [제한 사항]
 * orders 배열의 크기는 2 이상 20 이하입니다.
 * orders 배열의 각 원소는 크기가 2 이상 10 이하인 문자열입니다.
 * - 각 문자열은 알파벳 대문자로만 이루어져 있습니다.
 * - 각 문자열에는 같은 알파벳이 중복해서 들어있지 않습니다.
 * course 배열의 크기는 1 이상 10 이하입니다.
 * - course 배열의 각 원소는 2 이상 10 이하인 자연수가 오름차순으로 정렬되어 있습니다.
 * - course 배열에는 같은 값이 중복해서 들어있지 않습니다.
 * 정답은 각 코스요리 메뉴의 구성을 문자열 형식으로 배열에 담아 사전 순으로 오름차순 정렬해서 return 해주세요.
 * - 배열의 각 원소에 저장된 문자열 또한 알파벳 오름차순으로 정렬되어야 합니다.
 * - 만약 가장 많이 함께 주문된 메뉴 구성이 여러 개라면, 모두 배열에 담아 return 하면 됩니다.
 * - orders와 course 매개변수는 return 하는 배열의 길이가 1 이상이 되도록 주어집니다.
 *
 * [입출력 예]
 * orders	course	result
 * ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]	[2,3,4]	["AC", "ACDE", "BCFG", "CDE"]
 * ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"]	[2,3,5]	["ACD", "AD", "ADE", "CD", "XYZ"]
 * ["XYZ", "XWY", "WXA"]	[2,3,4]	["WX", "XY"]
 */

function solution(orders, course) {
  var answer = [];

  // 1. 각 주문을 알파벳 순으로 정렬
  orders = orders.map((order) => order.split("").sort().join(""));

  // 2. course의 각 길이별로 처리
  for (const courseLength of course) {
    // 현재 길이로 만들 수 있는 모든 조합과 그 횟수를 저장할 객체
    const menuCombinations = {};

    // 3. 각 주문에 대해 조합 만들기
    for (const order of orders) {
      // 현재 주문의 길이가 코스 길이보다 작으면 스킵
      if (order.length < courseLength) continue;

      // 조합 만들기
      const combinations = [];
      function createCombination(start, current) {
        if (current.length === courseLength) {
          combinations.push(current);
          return;
        }

        // 현재 위치부터 가능한 모든 조합 만들기
        for (let i = start; i < order.length; i++) {
          createCombination(i + 1, current + order[i]);
        }
      }

      createCombination(0, "");

      // 4. 만든 조합들의 카운트 증가
      for (const combo of combinations) {
        menuCombinations[combo] = (menuCombinations[combo] || 0) + 1;
      }
    }

    // 5. 현재 길이에서 가장 많이 주문된 조합 찾기
    const maxCount = Math.max(...Object.values(menuCombinations), 0);

    // 최소 2명 이상의 주문이 있는 경우만 처리
    if (maxCount >= 2) {
      // 가장 많이 주문된 조합들을 answer에 추가
      for (const [menu, count] of Object.entries(menuCombinations)) {
        if (count === maxCount) {
          answer.push(menu);
        }
      }
    }
  }

  console.log(answer.sort());

  // 6. 오름차순 정렬하여 반환
  return answer.sort();
}

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
// solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]);
// solution(["XYZ", "XWY", "WXA"], [2, 3, 4]);

function solution2(orders, course) {
  // orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"]
  // course = [2, 3, 4]

  let map = new Map(); // 조합과 해당 조합이 나온 갯수 저장할 Map,  Map은 다양한 자료형의 key를 허용하고, key-value 형태의 자료형으로 이루어진 Collection 입니다.
  let set = new Set(); // 각 orders 요소에 대한 조합 만들 때 중복 방지용 Set, value값 만을 저장하며 중복을 허용하지 않는 Collection 입니다. 동일한 값은 1개만 가질 수 있습니다.
  let best = new Array(course.length).fill(0); // [0, 0, 0] - 조합 길이 별 조합 갯수 최댓값 저장 (각 코스 길이별 최대 주문 횟수)
  let answer = []; // 최종 코스요리 모음

  // 각 orders에 대한 조합 만들기
  const makeC = (arr, str) => {
    // arr: 현재 사용 가능한 메뉴들의 배열
    // str: 현재까지 만들어진 조합 문자열

    // 예시: arr = ['A','B','C','F','G'], str = "" 로 시작
    // 첫 호출: makeC(['A','B','C','F','G'], "")
    // 두 번째 호출: makeC(['B','C','F','G'], "A")
    // 세 번째 호출: makeC(['C','F','G'], "AB")
    // ...

    // includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판단
    if (course.includes(str.length)) {
      // str의 길이가 2,3,4 중 하나일 때
      // 예: "AB" -> map에 {"AB": 1} 저장
      // str이 원하는 길이(2,3,4)가 되면 Map에 저장
      map.set(str, map.get(str) + 1 || 1); // 요소 추가: Map.set(key, value), 요소 접근: Map.get(key)

      // best 배열 업데이트
      // 예: "AB"는 길이가 2이므로 best[0] 업데이트
      if (best[course.indexOf(str.length)] < map.get(str)) {
        best[course.indexOf(str.length)] = map.get(str);
      }
    }

    for (let i = 0; i < arr.length; i++) {
      // 현재 가능한 모든 메뉴에 대해 새로운 조합 생성
      // 현재 문자열에 새로운 문자를 추가하고 정렬
      // 예: "" + "A" = "A"
      let newStr = (str + arr[i]).split("").sort().join("");
      // 예: str="A", arr[i]="B" -> newStr="AB"

      // 남은 문자들로 새로운 배열 생성
      let newArr = arr.slice();
      newArr.splice(i, 1);
      // 사용한 메뉴는 제거하고 남은 메뉴들로 새 배열 생성

      // 중복 체크 후 재귀 호출
      if (!set.has(newStr)) {
        set.add(newStr);
        makeC(newArr, newStr); // 재귀 호출
      }
    }
  };

  // 각 주문에 대해 조합 생성
  for (let i = 0; i < orders.length; i++) {
    makeC(orders[i].split(""), "");
    set = new Set(); // 다음 주문을 위해 Set 초기화
  }

  // 최종 결과 생성
  // map에는 {"AB": 1, "AC": 4, "BC": 2, ...} 형태로 저장됨
  // 각 조합의 갯수가 해당 조합의 길이 조합 리스트 중 최댓값에 해당할 경우
  for (let [k, v] of map) {
    // k: 조합된 메뉴, v: 주문 횟수
    // v가 2이상이고 해당 길이의 최대 주문 횟수와 같을 때만 답에 추가
    if (v >= 2 && v === best[course.indexOf(k.length)]) {
      answer.push(k);
    }
  }

  console.log(answer.sort());

  return answer.sort(); // 알파벳 순으로 정렬하여 반환
}

solution2(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]); // ["AC", "ACDE", "BCFG", "CDE"]
// solution2(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5]); // ["ACD", "AD", "ADE", "CD", "XYZ"]
// solution2(["XYZ", "XWY", "WXA"], [2, 3, 4]); // ["WX", "XY"]

// 주요 메서드 설명
// Map.set(key, value): Map에 key-value 쌍을 저장
// Map.get(key): key에 해당하는 value를 반환
// Set.has(value): Set에 해당 value가 있는지 확인
// Set.add(value): Set에 value를 추가
// Array.includes(): 배열에 특정 요소가 있는지 확인
// Array.indexOf(): 배열에서 요소의 인덱스를 반환
// Array.splice(): 배열의 기존 요소를 삭제하거나 새 요소를 추가
// String.split(): 문자열을 배열로 분할
// Array.join(): 배열의 모든 요소를 문자열로 결합
