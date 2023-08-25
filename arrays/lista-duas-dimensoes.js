const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosMedias = [alunos, medias];

// console.log(listaDeAlunosMedias)

//* acessando elementos
console.log(
    `A aluna que está na posição 1 da lista de alunos é ${listaDeAlunosMedias[0][1]} e sua nota é ${listaDeAlunosMedias[1][1]}.`
);
