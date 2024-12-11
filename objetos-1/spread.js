const estudante = {
    nome: 'Joao Silva',
    idade: 32,
    cpf: '1111111111',
    turma: 'JavaScript',
    bolsista: true, 
    telefone: ['551199999999', '551199999998', '551199999997'],
    enderecos: [{
        rua: 'Rua São José',
        numero: '0',
        complemento: 'apto 1'
    },
    {
        rua: 'Rua São João',
        numero: '1',
        complemento: null
    }]    
}

function exibirTelefones(telefone1, telefone2) {
    console.log(`Ligar para ${telefone1}`);
    console.log(`Ligar para ${telefone2}`);
}

// exibirTelefones(estudante.telefone[0], estudante.telefone[1]);
exibirTelefones(...estudante.telefone);

const dadosEnvio = {
    destinatario: estudante.nome,
    ...estudante.enderecos[0]
}

console.log(dadosEnvio);


