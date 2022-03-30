// Figures with sides flexibles using FUNCTIONS

// Code of Square

console.group("Square");

function SquarePerimeter(Side) {
    return  Side * 4;
}

function SquareArea(Side) {
    return Side * Side;
} 

console.groupEnd();

// Code of Triangle

console.group("Triangle");

function Triang_Perimeter(sidetriang1, sidetriang2, basetriang) {
    return (sidetriang1 + sidetriang2 + basetriang) + "cm";
}

function Triang_Area(basetriang, Height) {
    return (basetriang * Height) / 2 + "cm";
}

console.groupEnd();

// Code of Circle 

console.group("Circle");

// Radius

function Circle_Radius(Radius) {
    return Radius + "cm"
}

// Diameter 

function Circle_Diameter(Radius) {
    return Radius * 2 + "cm";
}   

// PI
const PI = Math.PI;

// Perimeter

function Circle_Perimeter(Radius) {
    const Diameter = Circle_Diameter(Radius);
    return Diameter * PI;
}

// Area

function Circle_Area(Radius) {
    return (Radius * Radius) * PI;
}

console.groupEnd()

// Interacting with HTML

// Square

function CalculatePerimeterSquare() {
    const input = document.getElementById("InputSquare"); //buscando por id lo que hay en la etiqueta inputsquare
    const value = input.value; // guarda solamente lo ingresado por el usuario

    const Perimeter = SquarePerimeter(value);
    alert(Perimeter); 
}

function CalculateAreaSquare() {
    const input = document.getElementById("InputSquare");
    const value = input.value;

    const Area = SquareArea(value);
    alert(Area);
}

// Write a function that calculates height of an isosceles triangle
// Definition: r2(a2 - (b2/4))

function CalculateHeighTriangle() {
    const input = document.getElementsByTagName("IsoLado");
    const SideIso = input.value;

    const input2 = document.getElementsByTagName("IsoBase");
    const SideBase = input2.value;

    const SideBase_2 = SideBase / 2;

    const CalSide = SideBase_2 * SideBase_2;

    const CalA2 = SideIso * SideIso;

    const RaizCuadrada = Math.sqrt(CalA2 - CalSide);
    const HeightTriang = RaizCuadrada;
    
    alert(HeightTriang);
}