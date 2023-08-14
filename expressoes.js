//* expressão de função

// const sum = function (num1, num2) {
//     return num1 + num2;
// }

// console.log(sum(1, 2));

//* diferença entre o modo declarativo e expressão de função: HOISTING
//* fuções e var são "listadas" no topo do arquivo

console.log(hi())

function hi(){
    return "Hi"
}

const sum = function (num1, num2) {
    return num1 + num2;
}
console.log(sum(1,1))