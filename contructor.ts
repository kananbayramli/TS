interface Point{
    x: number;
    y: number;
}

interface Vehicle{
    travelTo(point: Point) : void;
}

class Taxi1Cons implements Vehicle{

    constructor(private location: Point, color?: string){}

    travelTo(point: Point) : void {
        console.log(`Taksi X:${this.location.x} Y:${this.location.y} lokasiyasina gedir.`);
    }
}


let taxi_1: Taxi1Cons = new Taxi1Cons({x:1, y:2}, 'Yellow'); //bura parametr gozleyir contructora gore
taxi_1.travelTo({x:1, y:2});
//taxi_1.color = 'Yellow';

