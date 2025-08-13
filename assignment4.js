//SECTION - Problem 1
function totalFine(fare) {
  if (typeof fare !== "number") return "Invalid";
  if (fare <= 0) return "Invalid";
  if (!fare) return "Invalid";

  return fare + fare * (20 / 100) + 30;
}
// console.log(totalFine("65"));
//!SECTION Problem 1

//SECTION - Problem 2
function onlyCharacter(str) {
  if (typeof str !== "string") return "Invalid";

  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") newStr = newStr + str[i];
  }
  return newStr.toUpperCase();
}
// console.log(onlyCharacter(null));
//!SECTION Problem 2

//SECTION - Problem 3
function bestTeam(player1, player2) {
  if (!player1 || !player2) return "Invalid";
  if (typeof player1 !== "object") return "Invalid";
  if (typeof player2 !== "object") return "Invalid";
  if (Object.keys(player1).length === 0) return "Invalid";
  if (Object.keys(player2).length === 0) return "Invalid";

  let nFoul1 = player1.foul + player1.cardR + player1.cardY;
  let nFoul2 = player2.foul + player2.cardR + player2.cardY;

  if (nFoul1 === nFoul2) return "Tie";
  else if (nFoul1 < nFoul2) return player1.name;
  else return player2.name;
}
// const t1 = undefined;
// const t2 = null;
// console.log(bestTeam(t1, t2));
//!SECTION Problem 3

//SECTION - Problem 4
function isSame(arr1, arr2) {
  if (!Array.isArray(arr1)) return "Invalid";
  if (!Array.isArray(arr2)) return "Invalid";

  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
// console.log(isSame(NaN,undefined));
//!SECTION Problem 4

//SECTION - Problem 5
function resultReport(marks) {
  if (!Array.isArray(marks)) return "Invalid";

  let cPass = 0, cFail = 0, total = 0;
  for (let i = 0; i < marks.length; i++) {
    if (marks[i] === null || marks[i] === undefined) continue;
    marks[i] >= 40 ? cPass++ : cFail++;
    total += marks[i];
  }

  return {
    finalScore: marks.length === 0 ? 0 : Math.round(total / marks.length),
    pass: cPass,
    fail: cFail,
  };
}
// console.log(resultReport([null]));
// console.log (0/0);
//!SECTION Problem 5
