
const validator = require('validator')

const yargs = require('yargs');
const notes = require('./notes.js');
const { demandOption } = require('yargs');
const { listNotes } = require('./notes.js');


// cusotmizing yargs version
yargs.version('1.1.0')

//add , remove , read , list
//create add command
yargs.command({
    command: 'add'
    ,describe : 'add a new note',
    builder : {
        title : {
            describe : 'note title',
            demandOption : true,
            type : 'string'
        },
        body : {
            
            describe: 'note describtion',
            demandOption:true,
            type:'string'
        }

    }
    ,handler: (argv) =>{
        notes.addNote(argv.title,argv.body)
       // console.log('title: ' + argv.title)
        //console.log('body: ' + argv.body)
    }
})
//Create remove command
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder :{
        title: {
            describe : 'remove a note ',
            demandOption : true,
            type : 'string'
        }
        
    },

    handler:  (argv)=>
{
    notes.removeNote(argv.title);
}
})

//Creating list command
// yargs.command({
//     command : 'list',
//     describe : 'listing all notes',
//     handler : notes.listNotes()
//     }

// )


yargs.command({
    command: 'list',
    describe : 'listing all notes',
    handler :()=> notes.listNotes()
})

//Creating read command

yargs.command({
    command:'read',
    describe: 'reading a particular note',
    builder :{
        title :{
            describe : 'reading a note',
            demandOption : true,
            type : 'string'
        },
    },
    handler :  (argv) =>{
       notes.readNote(argv.title)
    }
})




yargs.parse();

//console.log(yargs.argv[2])