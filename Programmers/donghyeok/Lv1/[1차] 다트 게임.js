// https://school.programmers.co.kr/learn/courses/30/lessons/17682

function solution(result) {
  // 점수|보너스|[옵션] => 점수(0 ~ 10), 보너스(S, D, T), 옵션(*, #, )
  let score = 0;
  const scores = [];
  const bonus = { S: 1, D: 2, T: 3 };
  const option = { "*": 2, "#": -1 };

  for (let i = 0; i < result.length; i++) {
    const current = result[i]; // 현재 문자열

    // 현재 문자열이 보너스 중 하나라면
    if (bonus[current]) {
      // 현재 문자열이 보너스라면 점수에 보너스만큼 제곱한 다음 scores 배열에 담는다.
      scores.push(Math.pow(score, bonus[current]));
      // 점수 초기화
      score = 0;
    }
    // 현재 문자열이 옵션 중 하나라면
    else if (option[current]) {
      const lastIdx = scores.length - 1;

      // 현재 점수(scores 배열의 마지막 인덱스)에 옵션 점수를 곱한다.
      scores[lastIdx] *= option[current];

      // 만약 스타상(*)이면서 이전 점수가 있다면 이전 점수도 2배로 곱해준다.
      if (current === "*" && scores[lastIdx - 1]) {
        scores[lastIdx - 1] *= option[current];
      }
    }
    // 숫자인 경우
    else score += current;
  }

  console.log(scores);
  return scores.reduce((acc, cur) => acc + cur);
}

// 다른 사람 풀이 1
function singlePoint(stack) {
  if (stack.length > 0) {
    const point = Math.pow(stack.pop(), 1);
    stack.push(point);

    return true;
  }
  return false;
}
function doublePoint(stack) {
  if (stack.length > 0) {
    const point = Math.pow(stack.pop(), 2);
    stack.push(point);

    return true;
  }
  return false;
}
function triplePoint(stack) {
  if (stack.length > 0) {
    const point = Math.pow(stack.pop(), 3);
    stack.push(point);

    return true;
  }
  return false;
}
function star(stack) {
  if (stack.length > 0) {
    const point = stack.pop() * 2;

    if (stack.length >= 1) {
      const prevPoint = stack.pop() * 2;
      stack.push(prevPoint);
    }

    stack.push(point);

    return true;
  }
  return false;
}
function acha(stack) {
  if (stack.length > 0) {
    const point = stack.pop() * -1;
    stack.push(point);
    return true;
  }
  return false;
}

const operators = {
  S: singlePoint,
  D: doublePoint,
  T: triplePoint,
  "*": star,
  "#": acha,
};
function isOperator(character) {
  return operators[character];
}
function solution(dartResult) {
  var answer = 0;
  const stack = [];

  for (let i = 0; i < dartResult.length; i++) {
    const number = parseInt(dartResult.slice(i));

    if (Number.isInteger(number)) {
      stack.push(number);
      i += number.toString().length - 1;
    } else {
      const operator = isOperator(dartResult.charAt(i));
      operator(stack);
    }
  }
  console.log(stack);
  answer = stack.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
  );
  return answer;
}

// 다른 사람 풀이 2
function solution(dartResult) {
  const bonus = { S: 1, D: 2, T: 3 },
    options = { "*": 2, "#": -1, undefined: 1 };

  let darts = dartResult.match(/\d.?\D/g);

  for (let i = 0; i < darts.length; i++) {
    let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
      score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

    if (split[3] === "*" && darts[i - 1]) darts[i - 1] *= options["*"];

    darts[i] = score;
  }

  return darts.reduce((a, b) => a + b);
}

// 다른 사람 풀이 3
function solution(dartResult) {
  const bonusMap = [``, `S`, `D`, `T`];
  const optionMap = {
    "*": 2,
    "#": -1,
  };

  /**
   * 보너스 점수 계산 Single(S), Double(D), Triple(T)
   * @param bonusMap
   * @returns {function(*, *=)}
   */
  const bonusCheck = (bonusMap) => {
    return (data, str) => {
      const isBonus = bonusMap.indexOf(str);
      if (isBonus > 0) {
        const index = data.index,
          currentNum = data.currentNum;
        data.points[index] = Math.pow(Number(currentNum), isBonus);
        data.explanation[index] = `${currentNum}^${isBonus}`;
      }

      return data;
    };
  };

  /**
   * 옵션 점수 계산
   * 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다.
   * 아차상(#) 당첨 시 해당 점수는 마이너스된다.
   * @param optionMap
   * @returns {function(*, *)}
   */
  const optionCheck = (optionMap) => {
    return (data, str) => {
      const index = data.index,
        prev = index - 1,
        option = optionMap[str];
      switch (str) {
        case "*":
          data.points[index] = data.points[index] * option;
          data.explanation[index] = `${data.explanation[index]}*${option}`;
          if (prev > -1) {
            data.points[prev] = data.points[prev] * option;
            data.explanation[prev] = `${data.explanation[prev]}*${option}`;
          }
          break;

        case "#":
          data.points[index] = data.points[index] * option;
          data.explanation[index] = `${data.explanation[index]}*(${option})`;
          break;
      }

      return data;
    };
  };

  /**
   * 현재 점수 체크
   * @param data
   * @param str
   */
  const currentNumCheck = (data, str) => {
    const num = Number(str);
    if (!isNaN(num)) {
      if (data.points[data.index]) {
        data.index++;
        data.currentNum = ``;
      }

      data.currentNum += str;
    }
  };

  /**
   * 점수 총합을 구하기 위해.
   * @param data
   * @param index
   * @param array
   */
  const lastIndexCheck = (data, index, array) => {
    if (index >= array.length - 1) {
      data.answer = data.points.reduce((answer, num) => {
        return answer + num;
      }, 0);
    }
  };

  /**
   * String reduce 함수
   * @param bonusMap
   * @param optionMap
   * @returns {function(*=, *=, *=, *=)}
   */
  const reduce = (bonusMap, optionMap) => {
    const bc = bonusCheck(bonusMap);
    const oc = optionCheck(optionMap);

    return (data, str, index, array) => {
      //숫자 체크
      currentNumCheck(data, str);
      //보너스 체크
      bc(data, str);
      //옵션 체크
      oc(data, str);
      //마지막 체크
      lastIndexCheck(data, index, array);

      return data;
    };
  };

  const getAnswer = reduce(bonusMap, optionMap);
  const data = {
    currentNum: ``,
    index: 0,
    points: [],
    explanation: [],
    answer: 0,
  };

  dartResult.split("").reduce(getAnswer, data);
  return data.answer;
}

console.log(solution("1S2D*3T")); // 37
console.log(solution("1D2S#10S")); // 9
console.log(solution("1D2S0T")); // 3
console.log(solution("1S*2T*3S")); // 23
console.log(solution("1D#2S*3S")); // 5
console.log(solution("1T2D3D#")); // -4
console.log(solution("1D2S3T*")); // 59
