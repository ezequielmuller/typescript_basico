// Functions
function soma (x: number, y: number):number {
    return x + y
}
console.log(soma(1, 2))

function printName(firtsName: string, lastName?:string):string {
    return firtsName + (lastName ?? '')
}
console.log(printName('Ezequiel'))
console.log(printName('Ezequiel', ' Muller'))

// Funções Anônimas
const subtracao = function(x:number, y:number):number {
    return x - y
}

const array:string[] = ['João', 'Maria', 'Pedro']
const result = array.find(function(item) {
    return item == 'João'
})
console.log(result)

// Arrow Functions
const res = array.filter(item => item.includes('r'))
console.log(res)