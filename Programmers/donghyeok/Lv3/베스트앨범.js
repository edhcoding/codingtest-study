/**
 * 베스트앨범 - https://school.programmers.co.kr/learn/courses/30/lessons/42579
 *
 * [문제 설명]
 * 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
 *
 * 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 * 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 * 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 * 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
 *
 * [제한사항]
 * genres[i]는 고유번호가 i인 노래의 장르입니다.
 * plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
 * genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
 * 장르 종류는 100개 미만입니다.
 * 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
 * 모든 장르는 재생된 횟수가 다릅니다.
 */

function solution(genres, plays) {
  const genreMap = new Map(); // 장르별 재생 횟수 합계
  const songMap = new Map(); // 장르별 노래 정보

  genres.forEach((genre, index) => {
    const play = plays[index];
    genreMap.set(genre, (genreMap.get(genre) || 0) + play);

    if (!songMap.has(genre)) songMap.set(genre, []);
    songMap.get(genre).push([index, play]);
  });

  const sortedGenres = [...genreMap.entries()]
    .sort((a, b) => b[1] - a[1]) // 재생 횟수 내림차순 정렬
    .map((item) => item[0]); // 장르 이름만 배열로 반환

  const answer = sortedGenres.flatMap((genre) => {
    return songMap
      .get(genre) // 장르별 데이터 가져오고
      .sort((a, b) => b[1] - a[1] || a[0] - b[0]) // 재생 횟수 정렬 후 고유 번호 정렬
      .slice(0, 2) // 2개만 선택
      .map((song) => song[0]); // 고유 번호만 배열로 반환
  });

  return answer;
}

console.log(
  solution(
    ["classic", "pop", "classic", "classic", "pop"],
    [500, 600, 150, 800, 2500]
  )
); // [4, 1, 3, 0]
