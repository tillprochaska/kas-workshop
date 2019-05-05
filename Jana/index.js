console.log('Hello World!')

fetch('https://kas-workshop-api.netlify.com/polls/2.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson.title);
    console.log(myJson.votes[0].name);
     console.log(myJson.votes[0].party);
       console.log(myJson.votes[0].vote);
 "<table>"
 "<tr>"
 "<td>"
myJson.votes.forEach(function(vote){
	console.log(vote);
	document.getElementById("name").innerHTML += vote.name+"<br>" 

})


myJson.votes.forEach(function(vote){
	console.log(vote);
	document.getElementById("party").innerHTML += vote.party+"<br>" 

}) 

myJson.votes.forEach(function(vote){
	console.log(vote);
	document.getElementById("vote").innerHTML += vote.vote+"<br>" 

}) 
"</tr>"
"</td>"
"</table>"


    document.getElementById("ueberschrift").innerHTML = myJson.title



  })

obj = {table: "votes", limit: 704 };







