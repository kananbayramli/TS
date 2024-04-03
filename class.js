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
