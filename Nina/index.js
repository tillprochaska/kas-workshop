
fetch('https://kas-workshop-api.netlify.com/polls/1.json')
 .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    console.log(myJson.title);
    Titel = document.getElementById("Titel");
    Titel.innerHTML = myJson.title; // "Verbesserung der Information über einen Schwangerschaftsabbruch (Gesetzentwurf der Fraktionen der CDU/CSU und SPD)"
    console.log(myJson.votes);
    votes = document.getElementsByClassName("votes");
    list.getElementsByClassName("votes")[0].innerHTML //votes.innerHTML = myJson.votes;
    for (let i of myJson.votes) {
   console.log(i); // logs "0", "1", "2", "foo"
   console.log(i.name);
}

  }); 
