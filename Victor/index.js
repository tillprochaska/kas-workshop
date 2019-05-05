console.log('Hello World!')
$.getJSON("https://kas-workshop-api.netlify.com/polls/0.json", function(json) {
    console.log(json); // this will show the info it in firebug console
});