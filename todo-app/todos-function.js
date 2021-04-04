const getSavedTodos=function(){
    const todosJSON=localStorage.getItem('todos')
    if(todosJSON!==null){
        return JSON.parse(todosJSON)
    }
    else{
        return []
    }
}

const saveTodos=function(todos){
    localStorage.setItem('todos',JSON.stringify(todos))
}
const renderTodos=function(todos,filters){
    const fitleredTodos=todos.filter(function(todo){
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())// && !todo.completed
    })
    const incompleteTodo=fitleredTodos.filter(function(todo){
        return !todo.completed
    })
    document.querySelector("#todoFind").innerHTML=""
    document.querySelector('#todoFind').appendChild(generateSummaryDOM(incompleteTodo))
    fitleredTodos.forEach(function(todo){
        document.querySelector("#todoFind").appendChild(generateTodoDOM(todo))
    })
}
const removeTodo=function(id){
    const ind=todos.findIndex(function(todo){
        return id===todo.id
    })
    if(ind>=0){
        todos.splice(ind,1)
    }
}
const generateTodoDOM=function(todo){
    const divEl=document.createElement('div')
    const chck=document.createElement('input')
    const noteEl=document.createElement("span")
    noteEl.setAttribute('style','font-height:20px')
    const x=document.createElement('button')
    x.textContent='x'
    noteEl.textContent=todo.text
    chck.setAttribute('type','checkbox')
    x.addEventListener('click',function(){
        removeTodo(todo.id)
       // savenotes(notes)
        renderTodos(todos,filters)
    })
    divEl.appendChild(chck)
    divEl.appendChild(noteEl)
    divEl.appendChild(x)
 
    return divEl
}
const generateSummaryDOM=function(incompleteTodo){
    const summary=document.createElement('h2')
    summary.textContent=`you have ${incompleteTodo.length} todos left`
    return summary
    console.log(incompleteTodo)
}

/*

const generateTodoDOM

const generateSummaryDOM
*/