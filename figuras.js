//Código del cuadrado

console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado mide: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + "cm2");
console.groupEnd();

//Código del triangulo
console.group("Tríangulos");
const ladoTriangulo1= 6;
const ladoTriangulo2= 6;
const baseTriangulo= 4;
const alturaTriangulo=5.5;

console.log("Los lados del tríangulo son: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
console.log("La altura del tríangulo es " + alturaTriangulo + "cm");
const perimetroTriangulo= ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del tríangulo es: " + perimetroTriangulo + "cm");
const areaTriangulo= (baseTriangulo * alturaTriangulo)/2;
console.log("El área del tríangulo es: " + areaTriangulo + "cm2");
console.groupEnd();

//Código de círculo
console.group("Círculos");
//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo + "cm");
//Diámetro
const diametroCirculo = radioCirculo *2;
console.log("El diamtro del circulo es: " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log("PI es: " + PI);
//Circunferencia
const perimetroCirculo = diametroCirculo * PI;
console.log("La circunferencia es: " + perimetroCirculo + "cm");
//Area
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del circulo es: " + areaCirculo + "cm");

console.groupEnd();