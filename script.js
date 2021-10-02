fetch('https://icanhazdadjoke.com/slack') //Fetched the API
  .then(data => data.json())  //onverted the text into json
  .then(jokeData => {
      const jokeText = jokeData.attachments[0].text; //Took out joke data part
      const Joke = document.getElementById('Joke');   //Put it into joke id

      Joke.innerHTML = jokeText;
  })