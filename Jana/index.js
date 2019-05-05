console.log('Hello World!')

fetch('https://kas-workshop-api.netlify.com/polls/2.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson.title);
    console.log(myJson.votes[0].name);
   
myJson.votes.forEach(function(vote){
	console.log(vote);
	 document.getElementById("name").innerHTML += vote.name+"<br>" 
}) 
    document.getElementById("ueberschrift").innerHTML = myJson.title



  })

obj = {table: "votes", limit: 704 };







