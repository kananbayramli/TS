interface Point{
    x: number;
    y: number;
}

interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point) : void;
}

class Taxi1Cons implements Vehicle{

    color : string;

    constructor(location: Point, color: string){
        this.currentLocation = location;
        this.color = color;
    }

    currentLocation: Point;
    travelTo(point: Point) : void {
        console.log(`Taksi X:${point.x} Y:${point.y} lokasiyasina gedir.`);
    }
}


let taxi_1: Taxi1Cons = new Taxi1Cons({x:1, y:2}, 'Yellow'); //bura parametr gozleyir contructora gore
taxi_1.travelTo({x:1, y:2});
//taxi_1.color = 'Yellow';
console.log(taxi_1.currentLocation, taxi_1.);







