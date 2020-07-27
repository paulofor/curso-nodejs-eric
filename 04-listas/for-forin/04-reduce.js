const { obterPessoas } = require('./services')

Array.prototype.meuReduce = function (callback,valorInicial) {
    let valorFinal = (typeof valorInicial !== undefined) ? valorInicial : this[0];
    for (let i=0 ; i < this.length; i++) {
        valorFinal = callback(valorFinal,this[i],this);
    }
    return valorFinal
}

async function main() {
    try {
        const { results } = await obterPessoas('a');

        const pesos = results.map(item => parseInt(item.height));
        console.log('pesos' , pesos);

        //const total = pesos.reduce((anterior,posterior) => {
        //    return anterior + posterior;
        //})
       

        const minhaLista = [
            ['Erick' , 'Wendell'],
            ['NodeBR' , 'Nerdão']
        ];
        const total = minhaLista.meuReduce((final, item, lista) => {
            return final.concat(item);
        },[])
        .join(' - ');
        console.log('total', total);

    } catch (erro) {
        console.error('Falhou' , erro)
    }

}

main() 