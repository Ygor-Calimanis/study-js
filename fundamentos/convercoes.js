//* tipo de dado
//* boolean

//! converção implícita
const number = 456;
const textNumber = '456';

console.log(number === textNumber); // compara o tipo da variavel
console.log(number == textNumber); // compara o valor da variavel indepente do tipo

//* Number()
//* String()
console.log(number + Number(textNumber));

//! converção explícita

