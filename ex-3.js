// Exercise #3: Min Numbers
let numbers = [100, 20, 3, 1000];
let minNumber = 0;
// Start coding here
minNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (minNumber < numbers[i]) {
    minNumber = numbers[i];
  }
}
console.log(minNumber);
