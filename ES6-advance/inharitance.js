class vahicle {
    constructor(name,price){
        this.nmae=name;
        this.price=price;
    }
    move(){
        console.log('defferent side in country')
    }
}
 class bus extends vahicle{
    constructor(name,price,seat){
        super(name,price);
        this.seat=seat
    }
    route(){
        console.log('feni to sylhet')
    }
 }
const starLine = new bus('star-line',1000000,30)
console.log(starLine)
starLine.move()
starLine.route()