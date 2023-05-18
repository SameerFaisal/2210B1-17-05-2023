class Vehicle{
    vehicleName
    model
    color
    number
    constructor(vehicleName,model,color,number){
        this.vehicleName=vehicleName
        this.model=model
        this.color=color
        this.number=number
    }
    doorsOpen(){
console.log(`${this.name} doors are open `)
    }
    doorsClosed(){

    }
}

const car=new Vehicle("Mehran",1999,"Black","AAA-123")