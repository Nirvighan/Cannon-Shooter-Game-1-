//namespace all the matter.js files that will be used in this project for current and later
const {
    Engine,
    World,
    Bodies,
    Body,
    Mouse,
    MouseConstraint,
    Constraint,
    Composite,
    Detector
} = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

//create all the variables
var engine, bodies;
var ground;
var cannonpart1;
var cannonpart2;
var cannonpart3;
var cannonball;

function setup() {
    // Setup the canvas.
    createCanvas(1200, 600);

    //create our own engine and the world
    engine = Engine.create();
    world = engine.world;

    //create the ground
    ground = new Base(600, 590, 1200, 30);

    //create the cannon 
    cannonpart3 = new Cannonbase(270, 490, 75, 40);
    cannonpart2 = new Cannonroof(200, 510, 120, 30);
    cannonpart1 = new Cannonbase(200, 550, 150, 50);




}

function draw() {

    // set the background color
    background("lightblue");

    //update the engine
    Engine.update(engine);

    //display all the objects
    ground.display();

    cannonpart3.display();
    cannonpart2.display();
    cannonpart1.display();


}


//function keyReleased() {


//}