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
        })
        .catch(error => {
            jokeText.innerText = "Oops! Could not fetch a joke";
            console.error(error);
        });
    });
});
