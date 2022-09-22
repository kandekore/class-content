function callBackFunction(inputArr, callBackFunc){
//     let result;
//     for (let num of inputArr){
//         const result = callBackFunc(num);
//         if (result === true){
//             return true
//         }
//     }
// return false;
return inputArr.some(callBackFunc)
}

console.log(
    callBackFunction([1, 2, 3], function (num){
        return num === 7;
    }
   ) 
//    if (num = 2;){
//     // console.log(true)
// }
)
