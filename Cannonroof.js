//create the class for the top part of the cannon
class Cannonroof {
    //create the constructor function
    constructor(x, y, r) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }

    //create the display function
    display() {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("green");
        ellipse(pos.x, pos.y, this.r);
    }
};