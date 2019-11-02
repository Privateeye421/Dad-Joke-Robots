var dadJokeURL = 'https://icanhazdadjoke.com/';

var newDiv = $("<div class=\"row joke-row\">");
var roboKey = "asdf";
var jokeKey = "haha funny!!";  
newDiv.html("\
<div class=\"col-sm-3 robot-face\"><br \>\
<img class=\"robot0\" src=\"https://avatars.dicebear.com/v2/bottts/:"+roboKey+".svg\"><br \>\
</div><br \>\
<div class=\"col-sm-9 joke-text\"><br \>\
<div class=\"joke0\">" + jokeKey + "</div><br \>\
</div><br \>\
");
// append prepend after
$(".joke-robots").append(newDiv);

var jokeRequest=new XMLHttpRequest();
jokeRequest.open('GET', dadJokeURL);
jokeRequest.responseType = 'json';
jokeRequest.send();
jokeRequest.onload = function() {
	var requestedJoke = jokeRequest.response;
	$(".joke-robots").append(requestedJoke.joke);
}