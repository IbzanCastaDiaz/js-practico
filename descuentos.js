// const precioOriginal = 120;
// const descuento = 18;
// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

//console.log("El precio original es" + precioConDescuento)
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// }
// )
// function precioConDescuento(precio,descuento){
//     const porcentajePrecioConDescuento= 100- descuento;
//     const preciosConDescuento=(precio*porcentajePrecioConDescuento)/100;
//     return(preciosConDescuento)
// }

function ButtonPriceDiscount(){
    const inputPrice= document.getElementById("InputPrice");
    const inputDiscount= document.getElementById("InputDiscount");
    const valuePrice=inputPrice.value;
    const valueDiscount= inputDiscount.value;
    const calcularDescuento= 100-valueDiscount;
    const calcularPrecioConDescuento=(valuePrice*calcularDescuento)/100;
    const resultPrice= document.getElementById("ResultPrice");
    resultPrice.innerText= "El precio con descuento son: $" + calcularPrecioConDescuento;
}