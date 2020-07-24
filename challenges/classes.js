// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid{
    constructor(l, w, h){
        this.length = l;
        this.width = w;
        this.height = h;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return 2 * (this.length * this.width + this.width * this.height + this.height * this.length);
    }
}

// Test your volume and surfaceArea methods by uncommenting the logs below:
const cuboid = new Cuboid(4, 5, 5);
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class Cube extends Cuboid{
    constructor(l){
        super(l, l, l);
    }
    volume(){
        // the original formulas are still correct, but these are slightly more efficient
        return this.length ** 3;
    }
    surfaceArea(){
        return 6 * (this.length ** 2);
    }
}

const cube = new Cube(5);
console.log(cube.volume()); // 125
console.log(cube.surfaceArea()); // 150