// read exisiting NOtes from notes storage 
const getSavedNote=function(){
    const notesJSON=localStorage.getItem('notes')
    if(notesJSON!==null){
        return JSON.parse(notesJSON)
    }else{
        return []
    }
}
//remove notes
const removeNote=function(id){
    const noteIndex=notes.findIndex(function(note){
        return note.id===id
    })
    if(noteIndex>-1){
        notes.splice(noteIndex,1)
    }
}
//generate the dom structure for note
const generateNoteDOM=function(note){

    const noteEl=document.createElement('div')
    const textEl=document.createElement('span')
    const button=document.createElement('button')
    //setup remove note button    
    button.textContent='x'
    noteEl.appendChild(button)
    button.addEventListener('click',function(){
        removeNote(note.id)
       // savenotes(notes)
        renderNotes(notes,filters)
    })
    if(note.title.length>0){
       textEl.textContent=note.title
    }
    else{
       textEl.textContent=' Unnamed Note  '
    }
    //setup note text i.e. textEl
    noteEl.appendChild(textEl)
    return noteEl
}
//Render application notes
const renderNotes=function(notes,filters){
    const filteredNotes=notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })
    document.querySelector('#notes').innerHTML=""
    filteredNotes.forEach(function(note,ind){
        const noteEl=generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl) 
    });
}