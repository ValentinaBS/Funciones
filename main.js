// 1
function saludar(nombre) {
    console.log("Hola " + nombre);
}
saludar("Valentina");
// 2
function multiplicar(num1, num2) {
    return num1 * num2;
}
console.log(multiplicar(4, 8));
// 3
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1 + lado2 + lado3;
}
console.log(areaTriangulo(5, 3));
console.log(perimetroTriangulo(4, 5, 6));
// 4
function calcularPrecio(precio, cantidad) {
    if(cantidad >= 10) {
        let descuento = (10 / 100) * precio;
        return precio - descuento;
    } else if(cantidad >= 20) {
        let descuento = (20 / 100) * precio;
        return precio - descuento;
    } else {
        return precio;
    }
}
console.log(calcularPrecio(100, 10));
console.log(calcularPrecio(200, 22));
// 5
function esMayorDeEdad(edad) {
    return edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
}
console.log(esMayorDeEdad(18));
console.log(esMayorDeEdad(12));
// 6
function calcularImpuesto(ingresoAnual) {
    if(10000 <= ingresoAnual) {
        let impuestoDiez = (10 / 100) * ingresoAnual;
        return ingresoAnual - impuestoDiez;
    } else if(10000 >= ingresoAnual && ingresoAnual <= 20000) {
        let impuestoQuince = (15 / 100) * ingresoAnual;
        return ingresoAnual - impuestoQuince;
    } else {
        let impuestoVeinte = (20 / 100) * ingresoAnual;
        return ingresoAnual - impuestoVeinte;
    }
}
console.log(calcularImpuesto(5000));
console.log(calcularImpuesto(15000));
console.log(calcularImpuesto(25000));
// 7
let dia = prompt("Ingrese el dia")
switch (dia) {
    case "1":
        console.log("Es un día laboral");
        break;
    case "2":
        console.log("Es un día laboral");
        break;    
    case "3":
        console.log("Es un día laboral");
        break;
    case "4":
        console.log("Es un día laboral");
        break;
    case "5":
        console.log("Es un día laboral");
        break;
    case "6":
        console.log("Es fin de semana");
        break;
    case "7":
        console.log("Es fin de semana");
        break;
}