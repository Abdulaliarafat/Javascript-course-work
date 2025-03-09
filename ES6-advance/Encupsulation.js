class person{
   #status
    constructor(name,age,status){
        this.name=name;
        this.age=age;
        this.#status=status;

    }
    work(){
        console.log(`${this.name} work 10 hours in day`)
    }
    action(){
        console.log(this.#status)
    }
}
// const Rohim = new person('Rohim','20','single')
// Rohim.action()
