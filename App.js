alert ("bienvenido a la calculadora (solo se restar y sumar");
let a = parseInt(prompt("Ingrese primer numero"));
let b = parseInt(prompt("Ingrese segundo numero"));

function sumar (a,b) {
    c = a+b
    return alert (c);
    }

function restar (a,b) {
        c = a-b
        return alert (c);
        }

let operacion = parseInt(prompt("ingrese la operacion deseada (sumar o restar)"));

if (operacion = "sumar"){
    sumar(a,b);
} else {
    restar(a,b);
} 
