var a =0;
var b =0;
var calcularMultiplicacion=0;

a = parseInt(prompt("digita el numero"));
b = parseInt(prompt("lo mismo"));

calcularMultiplicacion = multiplicacion (a,b);

function multiplicacion(nA, nB){
    const result = nA*nB;
    console.log("EL RESULTADO ES:" + result);
}



/*-------------------------------------------------------------- */

var a =0;
var b =0;
var c =0;
var d =0;
var calcularMitad =0;

a = parseInt(prompt("digita el numero a"));
b = parseInt(prompt("digita el numero b"));
c = parseInt(prompt("digita el numero c"));
d = parseInt(prompt("digita el numero d"));

calcularMitad = calculo (a,b,c,d);

function  calculo(nA, nB, nC, nD) {
    const result=(nA + nB + nC + nD);
    media = (result /4);
    console.log("la media de todos los numeros es:" + result); 
}

/*--------------------------------------------------------------- */

var iva = 2.1;
var a = 0;
var calcularIva = 0;

a = parseInt(prompt("Presio"));

calcularIva = calculo (a, iva);

function calculo(nA, nIVA) {
    const result = nA * nIVA;
    console.log("el iva es: " + result)
    console.log("sin iva:" + a)
    console.log("total:" + (a+iva))

}

/*----------------------------------------------------------------- */

var tipoBox = 0
var tipoCaja = 1
const padding = 10;
const width = 300;
const border = 2;
var calcularCaja = 0;

tipo = parseInt(prompt("ingresa el tipo de caja"));

calcularCaja = caja(tipo, padding, width, border);

function caja(tipocaja, p, w, b){
    if (tipoCaja === 0){
        console.log("el ancho del contenido es: ${w} pixeles");
    } else if (tipo ===1){
        console.log("el ancho del borde es: ${p+w+b} pixeles");
    } else{
        console.log("error")
    }
}