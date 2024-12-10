const estudante = {
    nome: 'Joao Silva',
    idade: 32,
    cpf: '3213215425',
    turma: 'JavaScript',
    bolsista: true, 
    telefone: ['551199999999', '551199999998'],
    media: 7.5,
    estaAprovado: function(mediaBase) {
        return this.media >= mediaBase ? true : false
    }
}

console.log(estudante.estaAprovado(6));
