// Classes
class Pessoa {
  // Propriedades
  nome: string;
  idade: number;

  // Construtor
  constructor(nome: string, idade: number) {
    this.nome = nome;
    this.idade = idade;
  }

  // Metodos
  saudacao(): string {
    return `Olá, sou ${this.nome} e tenho ${this.idade} anos!`;
  }
}

const pessoa = new Pessoa("Ezequiel", 7);
console.log(pessoa.saudacao());

// Modificadores de Acesso
// public, private, protected

class Animal {
  public nome: string; // public - acessivel a qualquer lugar
  private idade: number; // private - acessivel somente dentro da classe animal
  protected tipo: string; // protected - acessivel dentro da classe animal e suas subclasses

  constructor(nome: string, idade: number, tipo: string) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  public fazerSom(): void {
    console.log(`${this.nome} faz um som!`);
  }

  private mostrarIdade(): void {
    console.log(`${this.nome} tem ${this.idade} anos!`);
  }

  protected mostrarTipo(): void {
    console.log(`${this.nome} é um ${this.tipo}`);
  }
}

class Cachorro extends Animal {
  constructor(nome: string, idade: number) {
    super(nome, idade, "Cachorro");
  }

  public fazerSom():void {
    console.log(`${this.nome} late`)
  }
  
  public mostrarDetalhes():void {
    this.mostrarTipo();
  }
}

const animal = new Animal("Animal", 5, "Desconhecido")
animal.fazerSom()

// Usar readonly deixa somente acessar sem alterar o valor
class Carro{
  readonly marca:string

  constructor(marca:string){
    this.marca = marca
  }
}

const carro = new Carro('Toyota')
console.log(carro.marca)
// carro.marca = 'Honda' ---- exemplo