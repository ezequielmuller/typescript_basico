// string, number, boolean
let nome = "Ezequiel";
let idade = 19;
let status = true;
// Enum
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Blue"] = "blue";
    Color["Green"] = "green";
})(Color || (Color = {}));
console.log(Color.Blue);
// Arrays e Tuplas
let list = [1, 2, 3, 4, 5];
let tuple = [1, "Hello World!"];
console.log(list, tuple);
// Any (qualquer tipo) e Unknown (pode usar funcoes do JS so se antes verificar o tipo dela)
let teste = "Any teste";
teste = 1;
let value = "Typescript";
if (typeof value == "string") {
    console.log(value.toUpperCase());
}
export {};
