console.log('Hello World!');
data = {"title": "Änderung des Tierschutzgesetzes"};
var el = document.querySelector("input");
console.log(el);
el.addEventListener('input', function (evt) {
  var inputvalue = this.value.toLowerCase()
  fetch('https://kas-workshop-api.netlify.com/polls/0.json')
    .then(function(response) {
      return response.json();
    })

    .then(function(PollData) {
      var votes = PollData.votes
      const result = votes.filter( item => {
        var name = item.name.toLowerCase()

        return name.indexOf(inputvalue) !== -1
        });

var list = document.querySelector("ul");

var listItems = result.map( item => `<li>${item.name}: <span class="${item.vote}">${item.vote}</span></li>`)
console.log(listItems)
list.innerHTML = listItems.join('');

    });
});
