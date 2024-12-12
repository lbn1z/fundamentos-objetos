const estudantes = require('./estudantes.json')

function buscarInformacao(lista, chave, valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}

const estudanteEncontrado = buscarInformacao(estudantes, 'nome', 'Greer');
console.log(estudanteEncontrado);

const telefoneEstudante = buscarInformacao(estudantes, 'telefone', '9916828153');
console.log(telefoneEstudante);
