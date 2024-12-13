## 두 개 뽑아서 더하기

***
### 참조
https://school.programmers.co.kr/learn/courses/30/lessons/68644

***
### 문제 설명
정수 배열 numbers가 주어집니다. numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 solution 함수를 완성해주세요.

***
### 제한사항
- numbers의 길이는 2 이상 100 이하입니다.
    - numbers의 모든 수는 0 이상 100 이하입니다.

***
| numbers     | result        |
|-------------|---------------|
| [2,1,3,4,1] | [2,3,4,5,6,7] |
| [5,0,2,7]   | [2,5,7,9,12]  |

***
### 코드 작성 전 설계
- numbers의 길이는 100이하이므로 이중for문 사용
- 배열에 있는 두 수를 더하여 hashset에 저장
- 정렬하기

### 처음 설계한 것의 문제점
- hashSet을 배열형태로 바꿔야함

### 풀이 과정
- HashSet 선언
- 이중for문 선언
    - numbers 배열에 있는 두 수를 더하여 hashSet에 값 저장
    - hash는 key가 중복되지 않음
- result 배열 선언
- for문을 사용하여 result배열에 넣기
- 배열 정렬

***
### 문제의 키 포인트
- hashSet같은 중복된 숫자를 지우는 법을 찾기
- hashSet => int[] 타입 바꾸는 법
- 배열 정렬(sort)

### 풀이 과정 중 찾아본 것
- hashSet을 get하는 법

### 후기
어렵지 않게 풀었지만 더 효율적인 방법을 찾아보려고 한다.

### 시간 복잡도
- 이중 반복문: O(numbers^2) == O(N^2)
- 반복문: O(sums) == O(M)
- 정렬: O(sums 크기의 정렬) == O(M logM)

결론: O(N^2 + M logM) => O(N^2)
