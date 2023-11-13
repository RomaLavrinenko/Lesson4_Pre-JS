class Worker{
    constructor(firstName, secondName, rate, days){
        this.name = firstName;
        this.surname = secondName;
        this.rate = rate;
        this.days = days;
    }
    getSalary(){
        return this.rate * this.days;
    }
}

const worker = new Worker('Ivan', 'Ivanov', 10, 31);
console.log(worker.name); // виведе 'Ivan'
console.log(worker.surname); //виведе 'Ivanov'
console.log(worker.rate); //виведе 10
console.log(worker.days); //виведе 31
console.log(worker.getSalary()); //виведе 310 - тобто 10*31

const workerTwo = new Worker('Roman','Romanov', 15 , 28);
console.log(`Сума зарплат двох робочих = ${worker.getSalary() + workerTwo.getSalary()}`)