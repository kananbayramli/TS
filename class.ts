interface Point{
    x: number;
    y: number;
}

interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point) : void;
}

class Taxi implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point) : void {
        console.log(`Taksi X:${point.x} Y:${point.y} lokasiyasina gedir.`);
    }
}

class Bus implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point) : void {
        console.log(`Avtobus X:${point.x} Y:${point.y} lokasiyasina gedir.`);
    }
}


let taxi_1: Taxi = new Taxi(); //object created
taxi_1.travelTo({x: 1, y:2});
taxi_1.currentLocation = {x:2, y:4}


let taxi_2: Taxi = new Taxi(); //object created
taxi_2.travelTo({x: 6, y:7});
taxi_2.currentLocation = {x:2, y:5}

let bus_1: Bus = new Bus();
bus_1.currentLocation = {x: 3, y:4}

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.x);




