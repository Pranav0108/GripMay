const notes=getSavedNote()

document.querySelector('#create-note').addEventListener('click',function(e){
    notes.push({
        id:uuidv4(),
        title:'',
        body:''
    })
    localStorage.setItem('notes',JSON.stringify(notes))
    renderNotes(notes,filters)
})

const filters={
    searchText:''
}

renderNotes(notes,filters)
document.querySelector("#search").addEventListener('input',function(e){
    //console.log(e.target.value)
   filters.searchText=e.target.value
   renderNotes(notes,filters)
})
/* <form id='name-form'> 
            <input type="text" placeholder="first name" name="firstName">
            <button>Submit</button>
        </form>
document.querySelector('#name-form').addEventListener('submit',function(e){
    e.preventDefault()
    console.log(e.target.elements.firstName.value)
    e.target.elements.firstName.value=''
})*/
/*<label> <input id='fun' type="checkbox"> check me</label>
document.querySelector('#fun').addEventListener('change',function(e){
    console.log(e.target.checked)
})*/
//dropdown
document.querySelector('#filterby').addEventListener('change',function(e){
    console.log(e.target.value)
})
/*{
    title:'My next trip',
    body:'I would like to go to spain'
},{
    title:'Hobbies to work on',
    body:'Exercise, eating  bit better'
},{
    title:'office modification',
    body:'Get a new seat'
}*/
/*notes.forEach(function(note){
    const title=document.createElement('h2')
    const body=document.createElement('p')
    title.textContent=note.title
    body.textContent=note.body
    document.querySelector('p').append(title)
    document.querySelector('p').appendChild(body)
})*/
/*const button=document.querySelector('button').addEventListener('click',function(e){
    console.log('do this work ')
    e.target.textContent='yeah!! you clicked this button '
})*/

