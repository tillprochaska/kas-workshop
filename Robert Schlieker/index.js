$.getJSON("https://kas-workshop-api.netlify.com/polls/2.json", function(json) {
	console.log(json);
    console.log(json.title); // this will show the info it in firebug console
    $("#Abstimmung").html(json.title);
    $("#Inhalt").html(JSON.stringify(json.votes))
    	var name = json.votes.map((vote)=>{
    		return vote.name
    	})
    	console.log(name)
    	var party = json.votes.map((vote)=>{
    		return vote.party
    	})
    	var constituency = json.votes.map((vote)=>{
    		return vote.constituency
    	})
    	var vote = json.votes.map((vote)=>{
    		return vote.vote
    	})
    	var tablebody = $("#abgeordnete")
  		for (var i = 0; i <= 704; i++) {
   			var row = `<tr>
  				<td>${name[i]}</td>
  				<td>${party[i]}</td>
  				<td>${constituency[i]}</td>
  				<td>${vote[i]}</td>
  			</tr>`
  			tablebody.append(row)
  		}

 });