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
