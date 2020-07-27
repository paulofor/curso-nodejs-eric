const service = require('./services')

Array.prototype.meuMap = function (func1) {
    const novoArrayMapeado = [];
    for (let i=0; i<this.length; i++) {
        const resultado = func1(this[i],i);
        novoArrayMapeado.push(resultado);
    }
    return novoArrayMapeado;
}


async function main() {
    try {
        const result = await service.obterPessoas('a');

        //const nomes = result.results.map((pessoa) => pessoa.name);

        const nomes = result.results.meuMap((pessoa, i) => {
            return pessoa.name;
        })

        console.log(nomes);
    } catch (erro) {
     
        console.error('Erro' , erro);
    }

}

main()