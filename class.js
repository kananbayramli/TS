var Taxi = /** @class */ (function () {
    function Taxi() {
    }
    Taxi.prototype.travelTo = function (point) {
        console.log("Taksi X:".concat(point.x, " Y:").concat(point.y, " lokasiyasina gedir."));
    };
    return Taxi;
}());
var Bus = /** @class */ (function () {
    function Bus() {
    }
    Bus.prototype.travelTo = function (point) {
        console.log("Avtobus X:".concat(point.x, " Y:").concat(point.y, " lokasiyasina gedir."));
    };
    return Bus;
}());
var taxi_1 = new Taxi(); //object created
taxi_1.travelTo({ x: 1, y: 2 });
taxi_1.currentLocation = { x: 2, y: 4 };
var taxi_2 = new Taxi(); //object created
taxi_2.travelTo({ x: 6, y: 7 });
taxi_2.currentLocation = { x: 2, y: 5 };
var bus_1 = new Bus();
bus_1.currentLocation = { x: 3, y: 4 };
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);
console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.x);
