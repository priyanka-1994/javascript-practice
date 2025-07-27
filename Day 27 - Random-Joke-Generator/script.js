document.addEventListener("DOMContentLoaded", () => {
    const jokeText = document.getElementById('joke');
    const jokeButton = document.getElementById('jokeBtn');

    jokeButton.addEventListener("click",() => {
        fetch('https://icanhazdadjoke.com/' , {
            headers: {
                Accept: 'application/json'
            }
        })
        .then(res=> res.json())
        .then(data => {
            jokeText.innerText = data.joke; 
            saveJokes(data.joke);
        })
        .catch(error => {
            jokeText.innerText = "Oops! Could not fetch a joke";
            console.error(error);
        });
    });
});

function saveJokes(joke) {
    const jokeHistory = JSON.parse(localStorage.getItem("jokes")) || [];
    jokeHistory.push(joke);
    localStorage.setItem('jokes',JSON.stringify(jokeHistory));
}

function loadJokes() {
    let jokeHistory = JSON.parse(localStorage.getItem('jokes')) || [];
    return jokeHistory; 
}
