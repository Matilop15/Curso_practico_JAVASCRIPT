// Figures with fixed sides

// Code of Square

console.group("Square");

const SquareSide = 5;
console.log("The side of the square measure: " + SquareSide + "cm");


console.log("The perimeter of the square is: " + SquarePerimeter + "cm");

const SquareArea = SquareSide * SquareSide;
console.log("The area of the square is: " + SquareArea + "cm2");

function SquareArea(Side) {
    return Side * Side;
} 

console.groupEnd();

// Code of Triangle

console.group("Triangle");

const sidetriang1 = 6;
const sidetriang2 = 6;
const basetriang = 4;

console.log(
    "The sides of the triangle measure: "
    + sidetriang1
    + "cm, "
    + sidetriang2
    + "cm, "
    + basetriang
    + "cm"
     );



const Triang_height = 5.5;
console.log("The height of the Triangle is: " + Triang_height + "cm");

const Triang_Perimeter = sidetriang1 + sidetriang2 + basetriang;
console.log("The perimeter of the Triangle is: " + Triang_Perimeter) + "cm";

const Triang_Area = (basetriang * Triang_height) / 2;
console.log("The Area of the Trianle is: " + Triang_Area + "cm2");


console.groupEnd();

// Code of Circle 

console.group("Circle");

// Radius

const Circle_Radius = 4;
console.log("The Radius of Circle is: " + Circle_Radius + "cm");


// Diameter 

const Circle_Diameter = Circle_Radius * 2;
console.log("The Diameter of Circle is: " + Circle_Diameter + "cm");
 
// PI
const PI = Math.PI;

// Perimeter

const Circle_Perimeter = Circle_Diameter * PI;
console.log("The Perimeter of Circle is: " + Circle_Perimeter + "cm");

// Area

const Circle_Area = (Circle_Radius * Circle_Radius) * 2;
console.log("The Area of Circle is: " + Circle_Area + "cm2");

console.groupEnd();