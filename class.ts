interface Point{
    x: number;
    y: number;
}

interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point) : void;
}

class Taxi1 implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point) : void {
        console.log(`Taksi X:${point.x} Y:${point.y} lokasiyasina gedir.`);
    }
}

class Bus1 implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point) : void {
        console.log(`Avtobus X:${point.x} Y:${point.y} lokasiyasina gedir.`);
    }
}



let taxi_2: Taxi1 = new Taxi1(); //object created
taxi_2.travelTo({x: 6, y:7});
taxi_2.currentLocation = {x:2, y:5}

let bus_1: Bus1 = new Bus1();
bus_1.currentLocation = {x: 3, y:4}

console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);

console.log(taxi_2.currentLocation.x);
console.log(taxi_2.currentLocation.x);




