const alunos = [
    "João",
    "Juliana",
    "Ana",
    "Caio",
    "Lara",
    "Marjorie",
    "Guilherme",
    "Aline",
    "Fabiana",
    "Andre",
    "Carlos",
    "Paulo",
    "Bia",
    "Vivian",
    "Isabela",
    "Vinícius",
    "Renan",
    "Renata",
    "Daisy",
    "Camilo",
];

// const sala1 = alunos.slice(0, 10);
// const sala2 = alunos.slice(10);
//! melhorias para dividir arrays de formma dinâmica

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(`Na sala 1 estarão os alunos: ${sala1}`);
console.log(`Na sala 2 estarão os alunos: ${sala2}`);