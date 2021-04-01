const todos=[{
    text: 'Order the food',
    completed:true
},{
    text:'Clean the kitchen',
    completed:false
},{
    text:'Buy food',
    completed:true
},{
    text:'Do work',
    completed:false
},{
    text:'Exercise',
    completed:true
}]

document.querySelector('#add').addEventListener('click',function(e){
    console.log('adding new todo in the list')
})
document.querySelector('#remove').addEventListener('click',function(e){
    e.target.textContent="removed todos"
})
/*const p=document.querySelectorAll('p')
p.forEach(function(todo){
    if(todo.textContent.includes('the')){
        console.log(todo)
        todo.remove()
    }   
});*/
/*const incompleteTodo=todos.filter(function(todo){
    return !todo.completed
})
const summary=document.createElement('h2')
summary.textContent=`you have ${incompleteTodo.length} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function(todo){
    const p=document.createElement('p')
    p.textContent=todo.text
    document.querySelector('body').appendChild(p)
})*/