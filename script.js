var notes = [];
let btnNew = document.getElementById('newNote');
btnNew.addEventListener('click', () => {
    createNote(notes);
});

let btnDelete = getBtns();


function getBtns() {
   btns = main.getElementsByTagName('i');
    console.log(btns.length);
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', event => {
            deleteNote(event);
        })
    }
}


function createNote(notes) {
    let count = notes.length;
    let main = document.getElementById('main');
    
    let note = document.createElement('div');
    note.setAttribute('class', 'note');
    note.setAttribute('data-number', '' + count);

    notes.push(count.toString());

    count = count + 1;

    let tools = document.createElement('div');
    tools.setAttribute('class', 'tools');
    note.appendChild(tools);

    let i = document.createElement('i');
    i.setAttribute('class', 'fa fa-trash');
    tools.appendChild(i);

    let message = document.createElement('textarea');
    message.setAttribute('class', 'message');
    note.appendChild(message);

    main.appendChild(note);

    getBtns();

    return notes;
}

function deleteNote(event) {
    let note = event.target.parentNode.parentNode;
    let noteId = note.getAttribute('data-number');
    for(i = 0; i < notes.length; i++) {
        if(noteId == notes[i]){
            notes.splice(i,1);
        }
    }
    console.log(notes);
    note.remove();
}