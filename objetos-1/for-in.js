const estudante = {
    nome: 'Joao Silva',
    idade: 32,
    cpf: '1111111111',
    turma: 'JavaScript',
    bolsista: true, 
    telefone: ['551199999999', '551199999998'],
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


for (let chave in estudante) {
    const tipo = typeof estudante[chave];
    if (tipo !== 'object' && tipo !== 'function') {
        const texto = `a chave ${chave}, tem o valor ${estudante[chave]}`
        console.log(texto);
    }
}

