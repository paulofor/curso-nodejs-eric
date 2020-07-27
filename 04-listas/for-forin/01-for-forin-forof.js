const service = require('./services')

async function main() {
    try {
        const result = await service.obterPessoas('a');
        const nomes = [];
        
        console.time('consulta-forof');
        for (let pessoa of result.results) {
            nomes.push(pessoa.name);
        }
        console.timeEnd('consulta-forof'); //  0.260ms


        console.time('consulta-for');
        for (let i=0; i<result.results.length; i++) {
            const nome = result.results[i].name;
            nomes.push(nome);
        }
        console.timeEnd('consulta-for'); // 0.254ms
        
        
        
        console.time('consulta-forin');
        for (let i in result.results) {
            nomes.push(result.results[i].name);
        }
        console.timeEnd('consulta-forin'); // 0.260ms
        

        


        console.log(nomes);
    } catch (erro) {
        console.error('Erro:' , erro)
    }
}

main()