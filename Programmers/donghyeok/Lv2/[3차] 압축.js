// https://school.programmers.co.kr/learn/courses/30/lessons/17684

function solution(msg) {
  var list = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var dic = list.reduce((d, a, i) => ((d[a] = i + 1), d), {});

  var result = [];

  var maxLen = 1;
  for (var i = 0; i < msg.length; i++) {
    var w = msg[i];
    var c = msg[i + 1];
    while (dic[w + c] && i < msg.length - 1) {
      i++;

      w = w + c;
      c = msg[i + 1];
    }

    result.push(dic[w]);

    list.push(dic[w + c]);
    dic[w + c] = list.length;
  }

  return result;
}

function solution(msg) {
  const answer = [];
  let nextWord = "";
  let lastCount = 27;
  const dir = {
    A: 1,
    B: 2,
    C: 3,
    D: 4,
    E: 5,
    F: 6,
    G: 7,
    H: 8,
    I: 9,
    J: 10,
    K: 11,
    L: 12,
    M: 13,
    N: 14,
    O: 15,
    P: 16,
    Q: 17,
    R: 18,
    S: 19,
    T: 20,
    U: 21,
    V: 22,
    W: 23,
    X: 24,
    Y: 25,
    Z: 26,
  };
  const s = msg.split("").reduce((acc, cur) => {
    nextWord = acc + cur;
    if (dir[nextWord] === undefined) {
      dir[nextWord] = lastCount++;
    } else {
      return acc + cur;
    }
    if (dir[acc] !== undefined) answer.push(dir[acc]);
    return cur;
  });

  answer.push(dir[s]);

  return answer;
}

// 다른 사람 풀이
function solution(msg) {
  const dict = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((dict, c, i) => {
    dict[c] = i + 1;
    return dict;
  }, {});
  dict.nextId = 27;
  const ans = [];
  for (let i = 0, j = 0; i < msg.length; i = j) {
    j = msg.length;
    let longest = "";
    while (dict[(longest = msg.substring(i, j))] === undefined) --j;
    ans.push(dict[longest]);
    dict[longest + msg[j]] = dict.nextId++;
  }

  return ans;
}

console.log(solution("KAKAO")); // [11, 1, 27, 15]
console.log(solution("TOBEORNOTTOBEORTOBEORNOT")); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution("ABABABABABABABAB")); // [1, 2, 27, 29, 28, 31, 30]
