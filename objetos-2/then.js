import { log } from "console";

function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras); 
   
    fs.promises.writeFile(arquivoNovo, textoPalavras).then(() => {
        console.log('arquivo criado');   
    })
    .catch((erro) => {
        throw erro
    })
    .finally(() => console.log('Operação finalizada'));
    
}


// utilizando async ao inves do .then

async function criaESalvaArquivo(listaPalavras, endereco) {
    const arquivoNovo = `${endereco}/resultado.txt`;
    const textoPalavras = JSON.stringify(listaPalavras); 
    try{
        await fs.promises.writeFile(arquivoNovo, textoPalavras);
        console.log('Arquivo criado');
    } catch(erro) {
        throw erro;
    }
}