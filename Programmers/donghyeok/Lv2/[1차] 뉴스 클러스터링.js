// https://school.programmers.co.kr/learn/courses/30/lessons/17677

function createMultiSet(str) {
  const multiSet = [];

  for (let i = 0; i < str.length - 1; i++) {
    const multiArray = [str[i], str[i + 1]];

    if (
      multiArray.every(
        (char) => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122
      )
    )
      multiSet.push(multiArray.join(""));
  }

  return multiSet;
}

function solution(str1, str2) {
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  const set1 = createMultiSet(lowerStr1);
  const set2 = createMultiSet(lowerStr2);

  if (set1.length === 0 && set2.length === 0) return 65536;

  const intersection = [];
  const shallowedSet2 = [...set2];

  for (const item of set1) {
    const index = shallowedSet2.indexOf(item);

    if (index !== -1) {
      intersection.push(item);
      shallowedSet2.splice(index, 1);
    }
  }

  const union = set1.length + set2.length - intersection.length;

  return Math.floor((intersection.length / union) * 65536);
}

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
