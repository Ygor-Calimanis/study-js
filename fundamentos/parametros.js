//* parâmetros
function sum(num1, num2) {
    return num1 + num2;
}

// console.log(sum(5, 20))

//* parâmetros x argumentos

//! ordem dos parâmetros

function nameAge(name, age) {
    return `Meu nome é ${name} e minha idade é ${age}`
}

// console.log(nameAge(40, 'Ygor'))

function multiplication(num1, num2) {
    return num1 * num2;
}
console.log(multiplication(sum(5, 9), sum(20, 30)));

