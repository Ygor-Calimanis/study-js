const salaJS = ["Evaldo", "Camis", "Mari"];
const salaPython = ["Ju", "Leo", "Raquel"];

var salasUnificadas = salaJS.concat(salaPython);

console.log(`Concatenando salasJS com salasPython: ${salasUnificadas}`);

//* a ordem que informamos os arrays afeta a ordem em que aparecerão na lista final
salasUnificadas = salaPython.concat(salaJS);

console.log(`Concatenando salasPython com salasJS: ${salasUnificadas}`);

