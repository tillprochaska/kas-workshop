
async function myFunction() {

	let data = await fetch('https://kas-workshop-api.netlify.com/polls/2.json')
	let myJson = await data.json()
	
	var x = document.getElementById("myInput").value;
	document.getElementById("demo").innerHTML = "<b>Eingabe: </b>" + x;

	function filterItems(arr, query) {
	   return arr.filter(function(el) {
		   return el.name.toLowerCase().indexOf(query.toLowerCase()) > -1;
	   })
   }

   	var ausgabe = filterItems(myJson.votes, x).map(function (vote) {
   		return vote.name + " hat abgestimmt mit: " + vote.vote + "<br>"
   		});

	document.getElementById("foto").src = filterItems(myJson.votes, x).map(function (vote) {
   		return vote.image
   		});

	document.getElementById("result").innerHTML = "<b>Ergebnis: </b>" + ausgabe.join(" ");

  }

