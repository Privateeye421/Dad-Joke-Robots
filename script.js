var goadrichJokesURL = 'http://api.icndb.com/jokes/random?firstName=Mark&lastName=Goadrich';
makeRobot(1,"haha funny!");
rollJoke(1);
var newDiv = $("<div class=\"row joke-row\">");
var roboKey = "asdf";
var jokeKey = "haha funny!!";
newDiv.html("\
<div class=\"col-sm-3 robot-face\"><br \>\
<img class=\"robot0\" src=\"https://avatars.dicebear.com/v2/bottts/:"+roboKey+".svg\"><br \>\
</div><br \>\
<div class=\"col-sm-9 joke-text\"><br \>\
<div class=\"joke0\">" + jokeKey + "</div><br \>\
</div>");
// append prepend after
$(".joke-robots").append(newDiv);


function rollJoke(num) {
	var jokeRequest=new XMLHttpRequest();
	jokeRequest.open('GET', goadrichJokesURL);
	jokeRequest.responseType = 'json';
	jokeRequest.send();
	jokeRequest.onload = function() {
		var requestedJoke = jokeRequest.response;
		var jokeID= requestedJoke.value.id;
		var jokeText=requestedJoke.value.joke;
		$(".joke-robots").append(requestedJoke.value.joke);
		$("robot"+num).attr("src", "https://avatars.dicebear.com/v2/bottts/:asdf.svg")
	}
}

function makeRobot(num, key){
	var newDiv = $("<div class=\"row joke-row\">");
	newDiv.html("\
	<div class=\"col-sm-3 robot-face\"><br \>\
	<img class=\"robot"+num+"\" src=\"https://avatars.dicebear.com/v2/bottts/:"+key+".svg\"><br \>\
	</div><br \>\
	<div class=\"col-sm-9 joke-text\"><br \>\
	<div class=\"joke0\">" + key + "</div><br \>\
	</div>");
	$(".joke-robots").append(newDiv);
}