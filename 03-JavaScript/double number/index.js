//var number = [2, 3, 4, 5];

//function doublenumbers(numbers) {
//let doubleNums = [];
// for (let i = 0; i < numbers.length; i++);
// let num = numbers[i] * 2;
// doubleNums.push(num);
//}
//console.log(doubleNums);

const max = (num) => {
  var maxNumber = num[0];
  for (let i = 1; i < num.length; i++)
    if (maxNumber < num[i]) {
      maxNumber = num[i];
    }
  console.log(maxNumber);
};

max([1, 2, 3, 4, 0, 8]);
