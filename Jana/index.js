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



myJson.votes.forEach(function(vote){
	console.log(vote);
	document.getElementById("result").innerHTML +=	`<tr>
  		<td>${vote.name} </td>
  		<td>${vote.party}</td>
  		<td>${vote.vote}</td>
  		<td>${vote.constituency}</td>
  	</tr>`



})





    document.getElementById("ueberschrift").innerHTML = myJson.title


  })


string.includes(substring)



  