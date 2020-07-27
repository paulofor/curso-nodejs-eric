const axios = require('axios');
const URL = 'http://swapi.dev/api/people';

async function obterPessoas(nome) {

    const url = `${URL}/?search=${nome}&format=json`;
    console.log('URL:' , url);
    const response = await axios.get(url);
    return response.data;
}

/*
obterPessoas('Luke')
.then((resultado) => {
    console.log('Data:' , resultado);
})
.catch((erro) => {
    console.error('DEU RUIM', erro);
})
*/

module.exports = {
    obterPessoas : obterPessoas
}