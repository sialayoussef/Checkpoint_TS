var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.start = function () { return console.log("Engine started"); };
        this.make = make;
        this.model = model;
        this.year = year;
    }
    return Car;
}());
var Fabia = new Car("Skoda", "RS", 2016);
Fabia.start();
