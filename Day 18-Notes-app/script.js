const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const notesContainer = document.getElementById('notes-container');

function loadNotes() {
    notesContainer.innerHTML = "";
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.forEach(noteText => {
        createNotes(noteText);
    });
}
function createNotes(noteText) {
    console.log("Creating note:", noteText);          // This will show in the browser console
    const noteItem = document.createElement('div');
    noteItem.classList.add('note-item');

    const noteContent = document.createElement('div');
    noteContent.classList.add('note-content');
    noteContent.textContent = noteText;

    noteContent.addEventListener("click", () => {
        const newtext = prompt("Edit your note: ", noteContent.textContent);
        if(newtext!==null){
            noteContent.textContent = newtext.trim();
            saveNotes();
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.textContent = 'delete';

    deleteBtn.addEventListener("click", () => {
        noteItem.remove();    
        saveNotes();
    });
    noteItem.appendChild(noteContent);
    noteItem.appendChild(deleteBtn);
    notesContainer.prepend(noteItem);
}
addNoteBtn.addEventListener("click",() => {
    const noteText = noteInput.value.trim();
    if(noteText) {
        createNotes(noteText);
        saveNotes();
        noteInput.value = "";
    } else {
        alert('Please enter a note..')
    }
});
function filterNotes() {
    const notesFilter = searchInput.value.toLowerCase().trim();
    const allNotes = document.querySelectorAll('.note-item');

    for (let i = 0; i < allNotes.length; i++) {
        const noteText = allNotes[i].querySelector('.note-content').textContent.toLowerCase();
        if (noteText.includes(notesFilter)) {
            allNotes[i].style.display = "flex";
        } else {
            alert("No match found.")
        }
    }
}
searchInput.addEventListener("input", filterNotes);

function saveNotes() {
    const notes = [];
    
    notesContainer.querySelectorAll('.note-item .note-content').forEach(noteContentDiv => {
        notes.push(noteContentDiv.textContent);
    });

    localStorage.setItem("notes", JSON.stringify(notes));
}

loadNotes();
