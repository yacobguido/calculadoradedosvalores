
export class calculadora{
    setcalculadora(){
        console.log("Calculadora"); 
        const readLineSync = require("readline-sync")
        const numerico1: number= readLineSync.question("inserta tu primer valor:");
        const numerico2: number= readLineSync.question("inserta tu segundo valor:");

        let resta = ( numerico1 - numerico2);
        console.log ("La resta es = ", resta);

        let division = (numerico1/numerico2);
        console.log ("La division es = ", division);

        let multiplicacion = (numerico1*numerico2);
        console.log ("La multiplicacion es = ", multiplicacion);

        let suma = (numerico1+numerico2);
        console.log ("La suma es = ", suma);
    };
}
const Calculadora= new calculadora
Calculadora.setcalculadora();