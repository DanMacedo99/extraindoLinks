//import chalk from 'chalk'
import pegaArquivo from './index.js'
import validaURLs from './http-validacao.js';

const caminho = process.argv

async function processaTexto(caminhoDeArquivo){
    const resultado = await pegaArquivo(caminhoDeArquivo[2]);
    if (caminho[3] === 'validar'){
        console.log('links validados', await validaURLs(resultado)) //chalk.yellow
    } else {
    console.log('lista de links', resultado); //chalk.yellow
    }
}

processaTexto(caminho);
