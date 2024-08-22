interface Ivehicle{
    make : string,
    model : string ,
    year : number,
    start :()=> void
}

class Car implements Ivehicle {
    make : string
    model : string 
    year : number

    constructor(make : string ,model : string ,year : number){
        this.make = make
        this.model=model
        this.year=year
    }
    start=()=>console.log("Engine started")
}

var Fabia = new Car("Skoda","RS",2016)

Fabia.start()