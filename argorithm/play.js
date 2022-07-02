//const readFileSyncAddress = "/dev/stdin"; // BackJun Submit
const readFileSyncAddress = "backjun/input.txt"; // vscode Test
const input = require("fs")
  .readFileSync(readFileSyncAddress)
  .toString()
  .trim()
  .split("\n");

const sol = (input) => {
  const match1 = [];
  const match2 = [];
  const record = [];

  const 몬스터수 = +input[0].split(" ")[0];
  let 시루의체력 = +input[0].split(" ")[1];
  const 몬스터공격력 = input[1].split(" ");
  const 주민 = input[2].split(" ");
  let 구한주민 = 0;

  for (let i = 0; i < 몬스터수; i++) {
    match1[i] = [주민[i], 몬스터공격력[i]];
  }
  for (let i = 0; i < 몬스터수; i++) {
    match2[i] = [몬스터공격력[i], 주민[i]];
  }
  match1.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return b[0] - a[0];
    }
  });
  match2.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    } else {
      return a[0] - b[0];
    }
  });
  let i = 0;
  while (!(i === match1.length)) {
    for (i = 0; i < match1.length; i++) {
      if (시루의체력 - +match1[i][1] < 0) {
        record.push(구한주민);
        구한주민 = 0;
        시루의체력 = +input[0].split(" ")[1];
        match1.shift();
        break;
      }
      시루의체력 -= +match1[i][1];
      구한주민 += +match1[i][0];
    }
  }
  i = 0;
  while (!(i === match2.length)) {
    for (i = 0; i < match2.length; i++) {
      if (시루의체력 - +match2[i][0] < 0) {
        record.push(구한주민);
        구한주민 = 0;
        시루의체력 = +input[0].split(" ")[1];
        match2.shift();
        break;
      }
      시루의체력 -= +match2[i][0];
      구한주민 += +match2[i][1];
    }
  }
  if (record.length === 0) return console.log(구한주민);
  return console.log(Math.max(...record));
};

sol(input);
