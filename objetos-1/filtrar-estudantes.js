const estudante = require('./estudantes.json');

function filtraPorPropriedade(lista, propriedade) {
    return lista.filter((estudante) => {
    return !estudante.endereco.hasOwnProperty(propriedade);        
    })
}

const listaEnderecosImcompletos = filtraPorPropriedade(estudante, 'cep');

console.log(listaEnderecosImcompletos);
