const square=(num)=> num * num

console.log(square(5))
const peoples=[
    {
        name:'andrrew',
        age:27
    },{
        name:'vikram',
        age:31
    },{
        name:'jess',
        age:22
    }
]


//find the person with age =22
//print person name
console.log((peoples.find((people)=>people.age==22)).name)