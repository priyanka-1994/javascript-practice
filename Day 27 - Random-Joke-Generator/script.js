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
            speakJoke(data.joke);
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
function speakJoke(textJoke) {
    const synth = window.speechSynthesis;
    const voiceJoke = new SpeechSynthesisUtterance(textJoke);

    voiceJoke.volume=0.8;
    voiceJoke.pitch=1;
    voiceJoke.lang='en-US';

    synth.speak(voiceJoke);
}
function rateJoke(joke,rating){
    let ratedJoke = JSON.parse(localStorage.getItem('ratedJoke')) || [];
    ratedJoke.push({ joke: joke, rating: rating });
    localStorage.setItem('ratedJoke',JSON.stringify(ratedJoke));
}

document.getElementById('thumbUp').addEventListener('click',() => {
    const joke=document.getElementById('joke').innerText;
    rateJoke(joke,'up');
});

document.getElementById('thumbDown').addEventListener('click', () => {
  const joke = document.getElementById('joke').innerText;
  rateJoke(joke, 'down');
});
