const { obterPessoas } = require('./services');

Array.prototype.filtro = function (func1) {
    const lista = [];
    for (let item of this) {
        const resultado = func1(item,this);
        if (resultado) {
            lista.push(item);
        }
    } 
    return lista;
}

/*

const item = {
    name : 'Erick',
    idade : 12
}

const { nome } = item;
console.log('nome',nome);

*/

async function main() {
    try {
        const { results } = await obterPessoas('a');
        //const familiaLars = results.filter((item) => {
        //    return item.name.toLowerCase().indexOf('lars') != -1
        //});

        const familiaLars = results.filtro((item, lista) => {
            return item.name.toLowerCase().indexOf('lars') != -1
        })
        const nomes = familiaLars.map((item) => item.name);
        console.log(nomes);
    } catch (error) {
        console.error('Erro:' , error);
    }
}

main();