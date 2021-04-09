class Person{
    constructor(firstName,lastName,age,likes=[]){
    this.firstName=firstName
    this.lastName=lastName
    this.age=age
    this.likes=likes
    }
    getBio(){
        let bio=`${this.firstName} is ${this.age} years old.`
        this.likes.forEach((like)=>{
        bio+=` ${this.firstName} likes ${like}.`
        })
        return bio
    }
    setName(fullname){
        this.firstName=fullname.split(" ")[0]
        this.lastName=fullname.split(" ")[1]    
    }
}
class Employee extends Person{
    constructor(firstName,lastName,age,position,likes){
        super(firstName,lastName,age,likes)
        this.position=position
    }
    getBio(){
        return `${this.firstName} ${this.lastName} is a ${this.position}`
    }
    getYearsLeft(){
        return 65-this.age
    }
}
const me=new Employee('Pranav','Powar',20,'teacher',['teaching','biking'])
// console.log(me)
me.setName('Andrew Mead')
console.log(me.getBio())
console.log(me.getYearsLeft())

const person2=new Person('Anderew','Mead',27)
person2.setName('Pranav powar')
console.log(person2.getBio())
