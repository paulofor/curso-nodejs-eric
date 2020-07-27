const { get } = require('axios')
const URL = 'http://swapi.dev/api/people';

async function obterPessoas(nome) {
    const url = `${URL}/?search=${nome}&format=json`;
    console.log('URL:' , url);
    const response = await get(url);
    return response.data;
}

module.exports = {
    obterPessoas : obterPessoas
}