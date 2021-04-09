const processData=()=>{
    data='123546597'
}
processData()
console.log(data)
// read exisiting NOtes from notes storage 
const getSavedNote=()=>{
    const notesJSON=localStorage.getItem('notes')
    try{
    return (notesJSON!==null)?JSON.parse(notesJSON):[]
    }
    catch(e){
        return []
    }
}

//save notes
const saveNotes=(notes)=>{
    localStorage.setItem('notes',JSON.stringify(notes))
}
//remove notes
const removeNote=(id)=>{
    const noteIndex=notes.findIndex((note)=>note.id===id)
    if(noteIndex>-1){
        notes.splice(noteIndex,1)
    }
}
//generate the dom structure for note
const generateNoteDOM=function(note){

    const noteEl=document.createElement('div')
    const textEl=document.createElement('a')
    const button=document.createElement('button')
    //setup remove note button    
    button.textContent='x'
    noteEl.appendChild(button)
    button.addEventListener('click',()=>{
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
    textEl.setAttribute('href',`/edit.html#${note.id}`)
    //setup note text i.e. textEl
    noteEl.appendChild(textEl)
    return noteEl
}
//sort yuor notes by one of three ways
const sortNotes=(notes,sortBy)=>{
    if(sortBy === "byEdited"){
        return notes.sort((a,b)=>{
            if(a.updatedAt>b.updatedAt){
                return -1
            }
            else if(a.updatedAt<b.updatedAt){
                return 1
            }
            else{
                return 0
            }
        })
    }
    else if(sortBy === "byCreated"){
        return notes.sort((a,b)=>{
            if(a.createdAt>b.createdAt){
                return -1
            }
            else if(a.createdAt<b.createdAt){
                return 1
            }
            else{
                return 0
            }
        })
    }
    else if(sortBy === "byAlphabetically"){
        return notes.sort((a,b)=>{
            if(a.title>b.title){
                return 1
            }
            else if(a.title<b.title){
                return -1
            }
            else{
                return 0
            }
        })
    }
}
//Render application notes
const renderNotes=(notes,filters)=>{
    //checking

    notes=sortNotes(notes,filters.sortedBy)
    const filteredNotes=notes.filter((note)=> note.title.toLowerCase().includes(filters.searchText.toLowerCase()))
    document.querySelector('#notes').innerHTML=""
    filteredNotes.forEach((note,ind)=>{
        const noteEl=generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteEl) 
    });
}
//generate the last edited message
const generateLastEdited=(timestamp)=> `last edited ${moment(timestamp).fromNow()}`
