const fs = require('fs')
const chalk = require('chalk');

const getNotes = () =>{
    const notes = loadNotes();
}


const addNote = (title, body) =>{
    const notes = loadNotes();


    //function in filter parameter is called for each note
    //const duplicateNotes =  notes.filter( (note) =>note.title === title)
   
    const duplicateFind = notes.find((note) => note.title===title)
    console.log(duplicateFind)

    if(duplicateFind===undefined){
        notes.push({
            title:title,
            body:body
        });
    
        savesNotes(notes);
        console.log('New Note Added ! ');
    }
    else {
        console.log('Note title is taken');
    }

    

}

const savesNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);

}

const loadNotes = ()=>{
   try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    //console.log(dataJSON);
    return JSON.parse(dataJSON);
   }
   catch(e){
       return[];
   }

}



const removeNote =  (title )=>{
    const notes = loadNotes();
    flag = false ;
    var flag = false;
    const newNotes = notes.filter( (note)=>{
 
        if(note.title !== title)
            {
                return note;
            }   
            else flag = true;    
    });

    savesNotes(newNotes);

    if(flag)
     console.log(chalk.green('note has been deleted'));
     else console.log(chalk.red('this note doesnt exist'));


}

const listNotes =()=>{
    console.log(chalk.bgBlue('your notes ..'))
    debugger;
    const notes = loadNotes();
    notes.forEach((note) => {
        console.log(note.title);
    });

    //notes.forEach(note => console.log(note));

  
}

const readNote = (title) =>{
    const notesToRead = loadNotes();
    const note = notesToRead.find((noteParam) => noteParam.title === title);
   
    if(note){
        console.log(chalk.blue.inverse(note.title))
        console.log(note.body)
    }
    else {
        console.log(chalk.red.inverse("note not found"))
    }

}

module.exports = {
    addNote: addNote,
    getNotes: getNotes,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}