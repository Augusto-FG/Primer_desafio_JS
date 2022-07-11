alert ("bienvenido a la calculadora");
let a = parseInt(prompt("ingrese primer numero"));
let b = parseInt(prompt("ingrese segundo numero"));

function sumar (a,b) {
    c = a+b
    return alert (c);
    }

function restar (a,b) {
        c = a-b
        return alert (c);
        }

function multiplicar (a,b) {
        c = a*b
        return alert (c);
        }

function dividir (a,b) {
        c = a/b
        return alert (c);
        }

let operacion = parseInt(prompt("ingrese 1 para sumar, 2 para restar, 3 para multiplizar, 4 para dividir)"));

/* if (operacion = "sumar"){
    sumar(a,b);
} else {
    restar(a,b);
}  */

switch (operacion) {
    case 1: sumar(a,b);
        
        break;
    case 2: restar(a,b);
        
        break;
    
    case 3: multiplicar(a,b);
        
        break;
    
    case 4: dividir(a,b);
        
        break;

    default:
        alert("Ha elegido una opción incorrecta");
        break;
}
