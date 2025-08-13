// string, number, boolean
let nome: string = "Ezequiel";
let idade: number = 19;
let status: boolean = true;

// Enum
enum Color {
  Red = "red",
  Blue = "blue",
  Green = "green",
}
console.log(Color.Blue);

// Arrays e Tuplas
let list: number[] = [1, 2, 3, 4, 5];
let tuple: [number, string] = [1, "Hello World!"];
console.log(list, tuple);

// Any (qualquer tipo) e Unknown (pode usar funcoes do JS so se antes verificar o tipo dela)
let teste: any = "Any teste";
teste = 1;

let value: unknown = "Typescript";
if (typeof value == "string") {
  console.log(value.toUpperCase());
}
