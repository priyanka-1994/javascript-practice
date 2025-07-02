const darkMode = document.querySelector('.dark-mode');
const body = document.body;
let theme_preference = 'dark-theme';

const savedTheme = JSON.parse(localStorage.getItem("theme_preference"));
if (savedTheme) {
    body.classList.add(savedTheme);
}

darkMode.addEventListener("click" , () => {
    body.classList.toggle('dark-theme');
    const currentTheme = body.classList.contains('dark-theme') ? 'dark-theme' : 'light-theme';
    localStorage.setItem('theme_preference', JSON.stringify(currentTheme));
}); 


// **** First Logic ****//

// const darkMode = document.querySelector('.dark-mode');
// const body = document.body;

// darkMode.addEventListener("click" , () => {
//     body.classList.toggle('darkmode');
//     body.classList.toggle('lightmode');
// });

// **** Second Logic ****//
// const darkMode = document.querySelector('.dark-mode');
// let mode = 'dark';

// darkMode.addEventListener("click" , () => {

//     mode = mode === 'dark' ? 'light' : 'dark';
//     console.log("Mode is: ",mode);
//     document.body.classList.toggle('dark-theme');
// });
