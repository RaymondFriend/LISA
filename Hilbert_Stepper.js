/**
    Hilbert Curve Calculator
    
    Below is a recursive algorithm split into two methods that steps across an N-th order planar Hilbert Curve.
    
    As Harold steps across the Hilbert Curve, the Hilbert_Points array is populated with the current Cartesian coordinates.
    
    Order of output curve: ORDER
*/

var ORDER = 5,
    Hilbert_Points = [];
    
/** Stepper object **/
var Harold = {
    pos : new PVector(0, 0),
    angle: 0,
    stepIndex: 1,
    /**
        @description turn Harold left by delta degrees
        @param delta {double}: angle by which Harold rotates
        @return void
    */
    rotate: function(delta) {
        this.angle += delta;
    },
    
    /**
        @description
        @param step {double}: magnitude of translation
        @return void
    */
    translate: function(step) {
        var oldPos = this.pos.get();
        this.pos.add(Math.round(step * Math.cos(this.angle * Math.PI / 180)), 
                     Math.round(step * Math.sin(this.angle * Math.PI / 180)) );
        Hilbert_Points[this.stepIndex ++] = [this.pos.x, this.pos.y];
    },
};

/** Hilbert object **/
var Hilbert = {
    stepper: Harold,
    
    /**
        @description recursive method 1, using a combination of rotations and translations 
        @param n {int}: decreasing from ORDER to 0
        @return void
    */
    f1: function(n) {
        if(n === 0) { return; }
        this.stepper.rotate(90);
        this.f2(n - 1);
        this.stepper.translate(1);
        this.stepper.rotate(-90);
        this.f1(n-1);
        this.stepper.translate(1);
        this.f1(n - 1);
        this.stepper.rotate(-90);
        this.stepper.translate(1);
        this.f2(n - 1);
        this.stepper.rotate(90);
    },
    /**
        @description recursive method 2, using a combination of rotations and translations 
        @param n {int}: decreasing from ORDER to 0
        @return void
    */
    f2: function(n) {
        if (n === 0) { return; }
        this.stepper.rotate(-90);
        this.f1(n - 1);
        this.stepper.translate(1);
        this.stepper.rotate(90);
        this.f2(n - 1);
        this.stepper.translate(1);
        this.f2(n - 1);
        this.stepper.rotate(90);
        this.stepper.translate(1);
        this.f1(n - 1);
        this.stepper.rotate(-90);
    },
    /**
        @description initiates recursive process on Hilbert curve of order ORDER
        @param none
        @return void
    */
    run: function() {
        Hilbert_Points.push([Harold.pos.x, Harold.pos.y]);
        this.f1(ORDER);  
    },
};

//Run Hilbert curve
Hilbert.run();

//Now Hilbert_Points has been populated with the nodes of the order: ORDER Hilbert curve