
let todos=getSavedTodos()
/*const p=document.querySelectorAll('p')
p.forEach(function(todo){
    if(todo.textContent.includes('the')){
        console.log(todo)
        todo.remove()
    }   
});*/
const filters={
    searchText:''
}

renderTodos(todos,filters)//to initially show the all todo
document.querySelector('#search').addEventListener('input',function(e){
    filters.searchText=e.target.value
renderTodos(todos,filters)//to rresh the todolist todo
})
document.querySelector('#addTodo').addEventListener('submit',function(e){
    e.preventDefault()
    if(e.target.elements.item1.value!==''){
    const x={
        id:uuidv4(),
        text:e.target.elements.item1.value,
        completed:false
    }
    //console.log(x)
    e.target.elements.item1.value=''
    todos.push(x)
    saveTodos(todos)
    renderTodos(todos,filters)
}
})
document.querySelector('#remove').addEventListener('click',function(){
    localStorage.removeItem('todos')
    todos=getSavedTodos()
    renderTodos(todos,filters)
})
document.querySelector('#hide').addEventListener('change',function(e){
    const hideCompleted=e.target.checked
    if(!hideCompleted){
        renderTodos(todos,filters)
    }
    else{
        const uncompleted=todos.filter(function(todo){
            return !todo.completed
        })
        if(uncompleted!==undefined){
        renderTodos(uncompleted,filters)
        }
    }
})
