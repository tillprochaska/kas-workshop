
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
    votes = document.getElementById("votes");
    console.log(votes)
    //votes = document.getElementsByClassName("votes");
    //list.getElementsByClassName("votes")[0].innerHTML //votes.innerHTML = myJson.votes;

   /* for (let i of myJson.votes) {
   console.log(i); // logs "0", "1", "2", "foo"
   console.log(i.name);*/

   //votes.innerHTML = votes.innerHTML + "<br>" + i.name + ", " + i.constituency;

   gefiltertes_array = myJson.votes.filter(function(abgeordneter){
   	return abgeordneter.name.includes("Alt")
   })
   console.log(gefiltertes_array);
   //votes.innerHTML = gefiltertes_array;

   html_snippets = gefiltertes_array.map(function(abgeordneter){
   	return abgeordneter.name
   })
   console.log(html_snippets);
   html_snippets.join()

let filterOutput = document.createElement("gefiltertes_array");

filterOutput.innerHTML = html_snippets.join("<br>");
document.querySelector("#votes").appendChild(filterOutput);

/*  function filterItems(arr, query) {

       return arr.filter(function(el) {

           return el.toLowerCase().indexOf(query.toLowerCase()) > -1;

       })*/

  }); 
