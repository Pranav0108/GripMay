const notes=[{
    title:'My next trip',
    body:'I would like to go to spain'
},{
    title:'Hobbies to work on',
    body:'Exercise, eating  bit better'
},{
    title:'office modification',
    body:'Get a new seat'
}
]
const findNote=function(notes,noteTitle){
    return notes.find(function(note){
        return note.title.toLowerCase()===noteTitle.toLowerCase()
    })
}
const sorting=function(notes){
    notes.sort(function(a,b){
        if(a.title.toLowerCase()>b.title.toLowerCase()){
            return 1
        }
        else if(a.title.toLowerCase()<b.title.toLowerCase()){
            return -1
        }
        else{
            return 0
        }
    })
}
console.log(findNote(notes,'office modification'))
sorting(notes)
console.log(notes)