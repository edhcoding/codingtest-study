// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  var arr = [];

  for (let i = 0; i < files.length; i++) {
    for (let j = 0; j < files[i].length; j++) {
      if (j === 0) {
        arr.push({ HEAD: files[i][0], NUMBER: "", TAIL: "" });
      } else if (
        (files[i][j].charCodeAt() < 48 || files[i][j].charCodeAt() > 57) &&
        arr[i]["NUMBER"] === ""
      ) {
        arr[i]["HEAD"] += files[i][j];
      } else if (
        files[i][j].charCodeAt() >= 48 &&
        files[i][j].charCodeAt() <= 57 &&
        arr[i]["TAIL"] === ""
      ) {
        arr[i]["NUMBER"] += files[i][j];
      } else {
        arr[i]["TAIL"] += files[i][j];
      }
    }
  }

  arr.sort(function (a, b) {
    let x = a.HEAD.toLowerCase();
    let y = b.HEAD.toLowerCase();
    let x2 = Number(a.NUMBER);
    let y2 = Number(b.NUMBER);
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    } else {
      if (x2 < y2) {
        return -1;
      }
      if (x2 > y2) {
        return 1;
      }
    }
    return 0;
  });

  return arr.map((v) => v.HEAD + v.NUMBER + v.TAIL);
}

function solution(files) {
  let answer = [];

  let isNumber = false;
  for (let file of files) {
    let name = file.split("");
    let word = "";
    let isNumber = false;
    let tmp = [];
    for (const n of name) {
      if (!isNaN(parseInt(n)) && !isNumber) {
        isNumber = true;
        tmp.push(word);
        word = "";
      } else if (isNumber && isNaN(parseInt(n))) {
        isNumber = false;
        tmp.push(word);
        word = "";
      }
      word += n;
    }

    if (word !== "") {
      tmp.push(word);
    }
    answer.push(tmp);
  }

  answer.sort((a, b) => {
    if (a[0].toUpperCase() !== b[0].toUpperCase()) {
      return a[0].toUpperCase().localeCompare(b[0].toUpperCase());
    } else if (parseInt(a[1]) !== parseInt(b[1])) {
      return parseInt(a[1]) - parseInt(b[1]);
    }
    return;
  });

  return answer.map((a) => a.join(""));
}

// /(\D*)([0-9]*)/i 이건 s"img12.png".match(reg) 했을 때 'img10','img','10' 이렇게 나온다 ..
function solution(files) {
  const re = /^([a-zA-Z-\. ]+)([0-9]+)(.*)$/;
  let dict = [];

  files.forEach((entry, idx) => {
    let [fn, head, num] = entry.match(re);
    dict.push({ fn, head: head.toLowerCase(), num: parseInt(num), idx });
  });

  return dict
    .sort((a, b) => {
      if (a.head > b.head) return 1;
      if (a.head < b.head) return -1;
      if (a.num > b.num) return 1;
      if (a.num < b.num) return -1;
      return a.idx - b.idx;
    })
    .map((e) => e.fn);
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ]),
);
// [ "img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png" ]
console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ]),
);
// [ "A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat" ]
