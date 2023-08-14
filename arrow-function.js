//* arrow function
const presentArrow = name => `Meu nome é ${name}`;
const sum = (num1, num2) => num1 + num2;

console.log(presentArrow('Ygor'))
console.log(sum(1, 1))

//! arrow function com + de 1 linha de instruções

const sumSmallNumbers = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "Somente números de 1 a 9"
    }else{
        return num1 + num2
    }
}

console.log(sumSmallNumbers(1, 2))
console.log(sumSmallNumbers(10, 20))

