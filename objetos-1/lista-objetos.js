const estudante = {
    nome: 'Joao Silva',
    idade: 32,
    cpf: '3213215425',
    turma: 'JavaScript',
    bolsista: true, 
    telefone: ['551199999999', '551199999998'],
    enderecos: [{
        rua: 'Rua São José',
        numero: '0',
        complemento: 'apto 1'
    }]    
}

estudante.enderecos.push({
    rua: 'Rua São João',
    numero: '1',
    complemento: 'apto 2'
})

// console.log(estudante.enderecos);
// console.log(estudante.enderecos[0]);

const listaEnderecosComplemento = estudante.enderecos.filter(enderecos => enderecos.complemento);


console.log(listaEnderecosComplemento);
