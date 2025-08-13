// Generics
function printAny<T>(arg: T):T{
    return arg
}

let output = printAny<string>("Hello World!")
let output2 = printAny<number>(100)
console.log(output)
console.log(output2)

// Union Types - preenche

function padLeft(value:string, padding:number | string){

    // Joga espaço em branco pra esquerda
    if (typeof padding == "number") {
        return Array(padding+1).join(" ") + value
    }

    // Joga o valor para o lado esquerdo
    if (typeof padding == 'string') {
        return padding + value
    }
    throw new Error("Numero ou String esperados!")
}

console.log(padLeft('Hello', 5))
console.log(padLeft('Hello', '###'))

// Intersection Types
interface Pessoa {
    nome: string
    idade: string
}

interface Funcionario {
    id:number
    departamento:string
}

type PessoaFuncionario = Pessoa & Funcionario
function printFuncionario(funcionario: PessoaFuncionario){
    console.log(funcionario)
}

// Type Gards - Garantir o tipo de uma variavel
function isString(value:any):value is string{
    return typeof value === "string"
}

// Type Assertions - modificacao de uum tipo pra outro
let someValue: any = "Teste"
let srfLength: number = (someValue as string).length
