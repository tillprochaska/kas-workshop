console.log('Hello World!')

fetch('https://kas-workshop-api.netlify.com/polls/2.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson.title);
    console.log(myJson.votes);
  })

