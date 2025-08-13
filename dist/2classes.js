// Classes
class Pessoa {
    // Propriedades
    nome;
    idade;
    // Construtor
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    // Metodos
    saudacao() {
        return `Olá, sou ${this.nome} e tenho ${this.idade} anos!`;
    }
}
const pessoa = new Pessoa("Ezequiel", 7);
console.log(pessoa.saudacao());
// Modificadores de Acesso
// public, private, protected
class Animal {
    nome; // public - acessivel a qualquer lugar
    idade; // private - acessivel somente dentro da classe animal
    tipo; // protected - acessivel dentro da classe animal e suas subclasses
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    fazerSom() {
        console.log(`${this.nome} faz um som!`);
    }
    mostrarIdade() {
        console.log(`${this.nome} tem ${this.idade} anos!`);
    }
    mostrarTipo() {
        console.log(`${this.nome} é um ${this.tipo}`);
    }
}
class Cachorro extends Animal {
    constructor(nome, idade) {
        super(nome, idade, "Cachorro");
    }
    fazerSom() {
        console.log(`${this.nome} late`);
    }
    mostrarDetalhes() {
        this.mostrarTipo();
    }
}
const animal = new Animal("Animal", 5, "Desconhecido");
animal.fazerSom();
// Usar readonly deixa somente acessar sem alterar o valor
class Carro {
    marca;
    constructor(marca) {
        this.marca = marca;
    }
}
const carro = new Carro('Toyota');
console.log(carro.marca);
export {};
// carro.marca = 'Honda' ---- exemplo
