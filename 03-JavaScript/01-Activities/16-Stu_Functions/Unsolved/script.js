// isEqual using function declaration
function isEqual(x, y) {
  if (x === y) {
    console.log("They are equal in type and value");
  } else if (x == y) {
    console.log("They are equal in value");
  } else {
    console.log("They are not equal");
  }
  return;
}

// Logs "They are equal in type and value"
isEqual(11, 10);

// Refer to sample functions as needed!

// TODO: Call the isEqual function so that it logs "They are equal in value"

//if (x == y) {
//  console.log("They are equal in value");
//}

// TODO: Rewrite isEqual as a function expression called 'isEqualTakeTwo`

function isEqualTakeTwo(number1, number2) {
  if (number1 === number2) {
    console.log("They are equal in type and value");
  } else if (number1 == number2) {
    console.log("They are equal in value");
  } else {
    console.log("They are not equal");
  }
  return;
}

isEqualTakeTwo(10, 12);

// TODO: Call the isEqualTakeTwo function so that it logs "They are not equal"
