// Generics
function printAny(arg) {
    return arg;
}
let output = printAny("Hello World!");
let output2 = printAny(100);
console.log(output);
console.log(output2);
// Union Types - preenche
function padLeft(value, padding) {
    if (typeof padding == "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding == 'string') {
        return padding + value;
    }
    throw new Error("Numero ou String esperados!");
}
console.log(padLeft('Hello', 5));
console.log(padLeft('Hello', '###'));
export {};
