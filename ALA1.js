const prompt =require('prompt-sync')();
let tarea ={
 titulo:"",
 descripcion:"",
 estado:"",
 fecha:"",
 vencimiento:"",
 dificultad:"",
}
 //buscar la operacion push
console.log("Hola, que desea?");
do {
console.log("----MENU-----");
let op = parseInt (prompt("[1] ver tareas \n"+ //parseint toma el string y lo tranforma en un numero
    "[2] Buscar Tarea\n"+
    "[3] Agregar tarea\n"+
    "[0] Salir\n" 
))

switch (op){
    case 1: 
    break;

    case 2:
        break;

    case 3:
        break;
    case 0:
        break;
}



} while (op == 0){
    console.log("Adios");
}//commit prueba git