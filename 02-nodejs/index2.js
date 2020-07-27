
function obterUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           return resolve({
                    id: 1,
                    nome: 'Aladin',
                    dataNascimento : new Date()
                })
        }, 5000)
    })
}


function obterTelefone(idUsuario) {
    return new Promise((resolve,reject) => {
       setTimeout(() => {
            return resolve({
                    telefone : '123456',
                    ddd : '21'
                })
       }, 3000)
    });
}

main();
async function main() {
    try {

        console.time('medida');
        const usuario = await obterUsuario();
        const telefone = await obterTelefone(usuario.id);

        console.log('Usuario', usuario);
        console.log('Telefone', telefone);

        console.timeEnd('medida');
    } catch (e) {
        console.log('Errro', e);
    }
 }