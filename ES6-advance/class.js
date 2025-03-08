class product{
    constructor(name,price,brand,owner){
       this.name=name;
       this.price=price;
       this.brandName=brand;
       this.ownerName=owner;

    }
    details (){
        console.log(`i am ${this.name} only details`)
    }
}
const other = new product('iphone',1234,'apple','steve jobs');
console.log(other)
other.details()
const xiaomi= new product('redmi',1200,'xiaomi','no name')
console.log(xiaomi)
xiaomi.details()