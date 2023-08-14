const minAge = 18;
const userAge = 16;

//* if clássico
// if (userAge >= minAge){
//     console.log("Acesso liberado!");
// } else{
//     console.log("Acesso negado para menores de 18 anos!")
// }

//* ternário
//!             condição               true                            false
console.log(userAge >= minAge ? "Acesso liberado!" : "Acesso negado para menores de 18 anos!"); 