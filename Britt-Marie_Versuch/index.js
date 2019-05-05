console.log('Hello World!');
data = {"title": "Änderung des Tierschutzgesetzes"};
var el = document.querySelector("input");
console.log(el);
el.addEventListener('input', function (evt) {
  fetch('https://kas-workshop-api.netlify.com/polls/0.json')
    .then(function(response) {
      return response.json();
    })
    .then(function(PollData) {
      var votes = PollData.votes
      console.log(votes[0].name);
      const result = votes.filter( item => item.vote === "ja");

console.log(result);
    });
});
