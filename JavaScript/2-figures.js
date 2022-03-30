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