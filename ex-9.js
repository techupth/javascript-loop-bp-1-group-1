// Exercise #9: Classroom Scores

let studentsScore = {
  James: 40,
  Ann: 80,
  Joe: 52,
  Ball: 67,
  Mick: 89,
  Ole: 10,
};
// Start coding here
let sumScore = 0;
let highestScore = 0;
let highestName;
let lowestScore = studentsScore.James;
let lowName;
let i = 0;
for (let item in studentsScore) {
  sumScore += studentsScore[item];
  if (highestScore < studentsScore[item]) {
    highestScore = studentsScore[item];
    highestName = item;
  }
  if (studentsScore[item] < lowestScore) {
    lowestScore = studentsScore[item];
    lowName = item;
  }
  i++;
}
console.log(`Average score is ${sumScore / i}`);
console.log(
  `${highestName} has the highest score , which is ${highestScore} points`
);
console.log(
  `${lowName} has the lowhest score , which is ${lowestScore} points`
);
