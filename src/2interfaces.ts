// Objeto
let usuario: {nome:string, idade:number}

usuario = {
    nome: 'Ezequiel',
    idade: 19
}

// Interfaces
interface Pessoa {
    // readonly (antes da variavel) so faz a possibilidade de ele ler
    nascimento: string
}

interface Pessoa {
    primeiroNome: string,
    ultimoNome?: string,
    idade: number
}

interface Funcionario extends Pessoa{
    salario: number
}

class Diretor implements Funcionario {
    idade = 11
    primeiroNome = 'Ezequiel'
    salario = 1000
    nascimento = '19/05/2006'
}

type Pontos = {
    x: number,
    y: number
}

type Dimensoes = {
    largura: number
    altura: number
}

type Retangulo = Pontos & Dimensoes

const retangulo: Retangulo = {
    altura: 100,
    largura: 100,
    x: 0,
    y: 0
}
