
const titleEl=document.querySelector('#note-title')
const bodyEl=document.querySelector('#note-body')
const noteId=location.hash.substring(1)
const dateEl=document.querySelector('#last-edited')
let notes=getSavedNote()
let note=notes.find(function(note){
    return note.id===noteId
})
if(note===undefined){
    location.assign('/index.html')
}
titleEl.value=note.title
bodyEl.value=note.body
dateEl.textContent=generateLastEdited(note.updatedAt)
titleEl.addEventListener('input',function(e){
    note.title=e.target.value
    note.updatedAt=moment().valueOf()
    dateEl.textContent=generateLastEdited(note.updatedAt)
    saveNotes(notes)
})
bodyEl.addEventListener('input',function(e){
    note.body=e.target.value
    note.updatedAt=moment().valueOf()
    dateEl.textContent=generateLastEdited(note.updatedAt)
    saveNotes(notes)
})
document.querySelector('#remove-note').addEventListener('click',function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})
window.addEventListener('storage',function(e){
    if(e.key==='notes'){
        notes=JSON.parse(e.newValue)
    }
    note=notes.find(function(note){
        return note.id===noteId
    })
    if(note===undefined){
        location.assign('/index.html')
    }
    titleEl.value=note.title
    bodyEl.value=note.body
    dateEl.textContent=generateLastEdited(note.updatedAt)
})
