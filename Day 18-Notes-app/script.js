const noteInput = document.getElementById('note-input');
const addNoteBtn = document.getElementById('add-note-btn');
const notesContainer = document.getElementById('notes-container');
const searchInput = document.getElementById('search-input');
const darkModeToggle = document.getElementById('dark-mode-toggle');

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
    deleteBtn.textContent = 'Delete';

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
            allNotes[i].style.display = "none";
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

darkModeToggle.addEventListener("click",() => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    darkModeToggle.textContent = isDark ? "☀️" : "🌙";
    localStorage.setItem("theme",isDark ? "dark" : "light");
});
if(localStorage.getItem("theme") === "dark"){
    document.classList.toggle("dark-mode");
    darkModeToggle.textContent = "☀️";
}

loadNotes();
