// Código del cuadrado

console.group("Cuadrados");
function perimetroCuadrado(lado){
    return lado * 4;
}
function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//Código Tríangulo
function perimetroTriangulo (lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo (base, altura) {
    return (base * altura)/2;
}

//Código Circulo 
const PI = Math.PI;
function diametroCirculo(radio) {
    return radio * 2;
}
// function perimetroCirculo (radio) {
//     return (2*PI*radio)
// }
// La forma de hacerlo en la parte de arriba es más practica pero al trabajar con varias interaciones es necesario realizarlos de la manera de abajo
// buena practica trabajar de la forma de abajo
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return (diametro * PI);
}
function areaCirculo(radio){
    return (radio * radio) * PI;
}


//Aquí interactuamos con el HTML

function calcularPerimetroCuadrado() {
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const perimetro=perimetroCuadrado(value);
    alert(perimetro);
}
function calcularAreaCuadrado(){
    const input=document.getElementById("InputCuadrado");
    const value=input.value;
    const area=areaCuadrado(value);
    alert(area);
}



function calcularPerimetroTriangulo(){
    const inputA=document.getElementById("InputTrianguloA");
    const inputB=document.getElementById("InputTrianguloB");
    const inputBase=document.getElementById("InputTrianguloBase");
    const inputAltrua=document.getElementById("InputTrianguloAltura");
    const valueA=inputA.value;
    const valueB=inputB.value;
    const valueBase=inputBase.value;
    const perimetro=perimetroTriangulo(valueA, valueB,valueBase);
    alert(perimetro);
}
function calcularAreaTriangulo(){
    const inputA=document.getElementById("InputTrianguloA");
    const inputB=document.getElementById("InputTrianguloB");
    const inputBase=document.getElementById("InputTrianguloBase");
    const inputAltura=document.getElementById("InputTrianguloAltura");
    const valueA=inputA.value;
    const valueB=inputB.value;
    const valueBase=inputBase.value;
    const valueAltura=inputAltura.value;
    const area=areaTriangulo(valueBase, valueAltura)
    alert(area);
}

function calcularPerimetroCirculo(){
    const inputCirculo=document.getElementById("InputCirculo");
    const valueCirculo=inputCirculo.value;
    const perimetro=perimetroCirculo(valueCirculo);
    alert(perimetro);
}
function calcularAreaCirculo(){
    const inputCirculo=document.getElementById("InputCirculo");
    const valueCirculo=inputCirculo.value;
    const area=areaCirculo(valueCirculo);
    alert(area);
}

//triangulo isósceles
function AIgualB(A, B){
    if (A != B) {
        return ("A no es igual a B");
    } else {
        return ("A si es igual a B");
    }
}
function verificarAIgualB(){
    const inputTA=document.getElementById("InputTA");
    const inputTB=document.getElementById("InputTB");
    const valueTA=inputTA.value;
    const valueTB=inputTB.value;
    const calcularAIgualB=AIgualB(valueTA, valueTB);
    alert(calcularAIgualB);
}
function alturaTriangulo(a, base){
    const hipotenusa=(a*a);
    const cateto=(base/2)*(base/2); 
    return(Math.sqrt(hipotenusa - cateto));
}
function calcularAlturaTriangulo(){
    const inputTA=document.getElementById("InputTA");
    const inputTC=document.getElementById("InputTC");
    const valueTA=inputTA.value;
    const valueTC=inputTC.value;
    const altura=alturaTriangulo(valueTA, valueTC);
    alert(altura);
}