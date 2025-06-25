document.addEventListener('DOMContentLoaded', () => {
    const noteInput = document.getElementById('note-input');
    const notesContainer = document.getElementById('notes-container');
    const addNoteBtn = document.getElementById('add-note-btn'); 

    function saveNotes() {
        const notes = [];
        notesContainer.querySelectorAll('.note-item .note-content').forEach(noteContentDiv => {
            notes.push(noteContentDiv.textContent);
        });
        localStorage.setItem('notes', JSON.stringify(notes));
    }

    function createNote(noteText) {

        const noteItem = document.createElement('div');
        noteItem.classList.add('note-item');

        const noteContent = document.createElement('div');
        noteContent.classList.add('note-content'); 
        noteContent.textContent = noteText;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-note-btn'); 
        deleteButton.textContent = 'Delete';

        deleteButton.addEventListener("click", () => {
            noteItem.remove();
            saveNotes();
        });

        noteItem.appendChild(noteContent); //
        noteItem.appendChild(deleteButton);
        notesContainer.prepend(noteItem);
    }

    addNoteBtn.addEventListener("click", () => {
        const noteText = noteInput.value.trim();
        if (noteText) {
            createNote(noteText);
            saveNotes();
            noteInput.value = '';
        } else {
            alert('Please enter a note');
        }
    });

    function loadNotes() {
        notesContainer.innerHTML = '';
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.forEach(noteText => {
            createNote(noteText);
        });
    }

    loadNotes();
});
