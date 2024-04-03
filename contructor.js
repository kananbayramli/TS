var Taxi1Cons = /** @class */ (function () {
    function Taxi1Cons(location, color) {
        this.currentLocation = location;
        this.color = color;
    }
    Taxi1Cons.prototype.travelTo = function (point) {
        console.log("Taksi X:".concat(point.x, " Y:").concat(point.y, " lokasiyasina gedir."));
    };
    return Taxi1Cons;
}());
var taxi_1 = new Taxi1Cons({ x: 1, y: 2 }, 'Yellow'); //bura parametr gozleyir contructora gore
taxi_1.travelTo({ x: 1, y: 2 });
//taxi_1.color = 'Yellow';
console.log(taxi_1.currentLocation, taxi_1.color);
