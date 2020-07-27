

function obtemUsuario(callback) {
    setTimeout(function() {
            callback(null, {
                id: 1,
                dataNascimento : new Date(),
                nome : 'Aladin'
            })
    }, 2000)
}

function obtemEndereco(idUsuario, callback) {
    setTimeout(function() {
        callback(null, {
            ddd : '21',
            numero : '99999999n'
        });
    }, 1000)
}

function obtemTelefone(idUsuario) {

}

function resolveUsuario(erro, usuario) {
    console.log('Usuario:' , usuario);
}

//obtemUsuario(resolveUsuario);

obtemUsuario((erro,usuario) => {
    console.log('Usuario:' , usuario);
    obtemEndereco(usuario.id,(erro,telefone) => {
        console.log('Telefone:' , telefone);
    })
})

