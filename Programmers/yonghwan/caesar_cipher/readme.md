## 시저 암호 - Caesar Cipher

### 문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.

### 제한 사항
- 공백은 아무리 밀어도 공백입니다.
- s는 알파벳 소문자, 대문자, 공백으로만 이루어져 있습니다.
- s의 길이는 8000이하입니다.
- n은 1 이상, 25이하인 자연수입니다.

### 입출력
| s       | n | result  |
|---------|---|---------|
| "AB"    | 1 | "BC"    |
| "Z"     | 1 | "A"     |
| "a B z" | 4 | "e F d" |

### 문제 출처
- 프로그래머스
- https://school.programmers.co.kr/learn/courses/30/lessons/12926

### 풀이 방법
- s를 char의 array로 된 변수 생성
- 생성한 char의 array를 이용해 for loop
- 각 조건에 따라 newWord라는 String에 글자 추가
    - 아스키 코드(acsii code) 활용
        - 새로운 글자 = 선택된 char의 acsii 숫자 + n

### 시간 복잡도
- for loop으로 characters의 length만큼 동작
- 시간 복잡도 : $O(n)$