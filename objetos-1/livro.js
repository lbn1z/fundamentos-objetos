const anoAtual = new Date().getFullYear();

const livro = {
    titulo: 'Harry Potter e a Criança Amaldiçoada',
    autor: 'J. K. Rowling, John Tiffany, Jack Thorne',
    anoPublicacao: new Date(2016, 6, 31),
    genero: 'Fantasia, drama, aventura',
}

const anoDePublicacao = anoAtual - livro.anoPublicacao.getFullYear();

livro.idadeLivro = anoDePublicacao;

livro.mostrarDetalhe = "Detalhes do Livro:\n" +
"Titulo: " + livro.titulo + "\n" +
"Autor: " + livro.autor + "\n" +
"Ano de Publicação: " + livro.idadeLivro + "\n" +
"Gênero: " + livro.genero + "\n" +
"Idade de Publicação: " + livro.idadeLivro + " anos de publicação";





// const mostrarDetalhe = `O Livro "${livro.titulo}" conta a historia de um grande bruxo, que vive a sua vida em uma castelo repleto de magia e misterios. Escrito por ${livro.autor}, o livro foi publicado em ${livro.anoPublicacao.getFullYear()} e está com ${anoDePublicacao} anos de lancamento!`

console.log(livro.mostrarDetalhe);
