const assert = require('assert')
const { get } = require('axios')
const { obterPessoas } = require('./service')

//assert.ok(false);
const nock = require('nock')


describe('Star Wars Test', function()  {
    this.beforeAll(() => {
        const response = {

        }
    })


    it ('deve buscar o r2d2 com o formato correto' , async () => {
        const esperado = [
            { nome: 'R2-D2' , peso: 96}
        ]
        const nomeBase = 'r2-d2'

        const { results } = await obterPessoas(nomeBase)
        const resultado = results.map((item) => {
            return { nome: item.name , peso: item.height }
        })
        assert.deepEqual(resultado, esperado);
    })
})