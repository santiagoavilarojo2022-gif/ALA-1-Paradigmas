const readline = require('readline');
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
})

rl.question('Ingrese el primer numero: ', (respuesta1) => {
    let operando1 = parseFloat(respuesta1);

    rl.question('Ingrese el operador (+, -, *, /): ', (operador) =>{
     
     rl.question('Ingrese el 2do numero: ', (respuesta2) => {
        let operando2 = parseFloat(respuesta2);
        let resultado;

       switch (operador){
        case '+':
            resultado = operando1 + operando2;
            break;
        case '-':
            resultado = operando1 - operando2;
            break;
        case '*':
            resultado = operando1 * operando2;
            break;
        case '/':
            if (operando2==0){
                console.log("No se puede dividir por 0");
                rl.close();
                return;
            } else{
                resultado = operando1 / operando2;
            }
            break;
            default:
                console.log("Operador invalido");
                rl.close();
                return;
     }
     console.log("el resultado es: " + resultado);
     rl.close();
    })
})
})