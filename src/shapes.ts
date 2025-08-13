export interface Shape {
    draw(): void;
}

export class Circulo implements Shape {
    draw():void{
        console.log("Desenhando circulo")
    }
}

//export default Circulo;