// declaracion de constant
// const from cuadrado
const btnPc = document.getElementById('btnPc')
const btnAc = document.getElementById('btnAc')
const salidaC = document.getElementById('salidaC')

// const from triangulo
const btnPt = document.getElementById('btnPt')
const btnAt = document.getElementById('btnAt')
const btnHt = document.getElementById('btnHt')
const salidaT = document.getElementById('salidaT')

// const from circulos
const btnPr = document.getElementById('btnPr')
const btnAr = document.getElementById('btnAr')
const salidaR = document.getElementById('salidaR')

// encapcsulamiento den functiones de
// cuadrado
const perimeterCuadrado = (Side) => Side * 4
const areaCuadrado = (Side) => Side**2

// triangulo
const perimeterTRiangual = (Side1, Side2, base) => Side1 + Side2 + base
const areaTRiangual = (base, Height) => (base * Height)/2
// get height Triangle
function calculateHeightTriangle() {
    const base = document.getElementById("base");
    const Side1 = document.getElementById("Side1");
    const Side2 = document.getElementById("Side2");
    const basee = parseInt(base.value);
    const value1 = parseInt(Side1.value);
    const value2 = parseInt(Side2.value);
    if(value1 === value2){
        return Math.sqrt((value1 * value1) - ((basee / 2) * (basee / 2)))
    } else{
        return (value1 * value2) / basee
    }
}

// Circle diametre
const PI = Math.PI
const diametro = (radius) => radius * 2 
const perimeterCirculo = (radius) => {
    return diametro(radius) * PI
}
const areaCirculo = (radius) => radius**2 * PI

// event from click
// get perimeter cuadrado
btnPc.onclick = () => {
    let Side = document.getElementById('SideC')
    const medida = document.getElementById('medidasC')
    if(Side.value){
        salidaC.innerText = `Perimeter: ${perimeterCuadrado(parseInt(Side.value))}${medida.value}.`
    } else {
        salidaC.innerText = `Insert value!`
    }
}
// get area cuadrado
btnAc.onclick = () => {
    let Side = document.getElementById('SideC')
    const medida = document.getElementById('medidasC')
    if(Side.value){
        salidaC.innerText = `Area: ${areaCuadrado(parseInt(Side.value))}${medida.value}2.`
    } else {
        salidaC.innerText = `Insert value!`
    }
}

// get perimeter Triangle
btnPt.onclick = () => {
    let Side1 = document.getElementById('Side1')
    let Side2 = document.getElementById('Side2')
    let base = document.getElementById('base')
    const medida = document.getElementById('medidasT')
    if (Side1.value && Side2.value && base.value) {
        salidaT.innerText = `Perimeter: ${perimeterTRiangual(parseInt(Side1.value), parseInt(Side2.value), parseInt(base.value))}${medida.value}.`
    } else {
        salidaT.innerText = `Insert the required fields!`
    }
}
// get area Triangulo
btnAt.onclick = () => {
    let base = document.getElementById('base')
    let Side1 = document.getElementById('Side1')
    let Side2 = document.getElementById('Side2')

    const medida = document.getElementById('medidasT')
    if (base.value && Side1.value && Side2.value) {
        salidaT.innerText = `Area: ${areaTRiangual(parseInt(base.value), calculateHeightTriangle())}${medida.value}2.`
    } else {
        salidaT.innerText = `Insert the required fields!`
    }
}

// get Height triangle
btnHt.onclick = () => {
    let base = document.getElementById('base');
    let Side1 = document.getElementById('Side1');
    let Side2 = document.getElementById('Side2');

    const medida = document.getElementById('medidasT');
    if (base.value && Side1.value && Side2.value) {
        salidaT.innerText = `Height: ${calculateHeightTriangle()}${medida.value}.`
    } else {
        salidaT.innerText = `Insert the required fields!`
    }
}

// get Perimeter circle
btnPr.onclick = () => {
    let radius = document.getElementById('radius')
    let medida = document.getElementById('medidasR')
    if(radius.value){
        salidaR.innerText = `Perimeter: ${(perimeterCirculo(parseInt(radius.value))).toFixed(2)}${medida.value}.`
    } else {
        salidaR.innerText = `Insert the radius value!`
    }
}
// get area circle
btnAr.onclick = () => {
    let radius = document.getElementById('radius')
    let medida = document.getElementById('medidasR')
    if(radius.value){
        salidaR.innerText = `Area: ${(areaCirculo(parseInt(radius.value))).toFixed(2)}${medida.value}2.`
    } else {
        salidaR.innerText = `Insert the radius value!`
    }
}