class CoffeeMake{
    constructor(nameCoffee,age){
        this.nameCoffee = nameCoffee;
        this.age = age;
    }
    on(){
        return `It is ${this.nameCoffee} -- on , ${this.age} age`;
    }
    off(){
        return `It is ${this.nameCoffee} -- off , ${this.age} age`;
    }
}

class Kapelna extends CoffeeMake{
    constructor(nameCoffee,age , price){
        super(nameCoffee , age);
        this.price = price;
    }
    kapelWrite(){
        return `Your ${this.nameCoffee} price ${this.price}`
    }
}

class Rizkova extends CoffeeMake{
    constructor(nameCoffee,age , price){
        super(nameCoffee , age);
        this.price = price;
    }
    rizWrite(){
        return `Ohhhh! Very nice ${this.nameCoffee} by ${this.price}`;
    }
}

class CoffeMachine extends CoffeeMake{
    constructor(nameCoffee,age , price){
        super(nameCoffee , age);
        this.price = price;
    }
    machineWrite(){
        return `CoffeMachine coffe for ${this.price}`;
    }
}

let kap = new Kapelna("Kapelna Americano", 5 , "2$");
console.log(kap.on());
console.log(kap.kapelWrite());
console.log('');
let riz = new Rizkova("Kapelna late", 8 , "5$");
console.log(riz.off());
console.log(riz.rizWrite());
console.log('');
let cmach = new CoffeMachine("CoffeMachine capucino", 2 , "3$");
console.log(cmach.off());
console.log(cmach.on());
console.log(cmach.machineWrite());
