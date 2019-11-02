var goadrichJokesURL = 'http://api.icndb.com/jokes/random?firstName=Mark&lastName=Goadrich';
console.log("Hello world!");

makeRobot(1,"haha funny!");

function rollJoke(num) {
	console.log("rollJoke("+num+")");
	var jokeRequest=new XMLHttpRequest();
	jokeRequest.open('GET', goadrichJokesURL);
	jokeRequest.responseType = 'json';
	jokeRequest.send();
	jokeRequest.onload = function() {
		var requestedJoke = jokeRequest.response;
		console.log("requestedJoke="+jokeRequest.response);
		var jokeID = requestedJoke.value.id;
		console.log("jokeID="+jokeID);
		var jokeText=requestedJoke.value.joke;
		console.log("jokeID="+jokeText);
		var robotURL="https://avatars.dicebear.com/v2/bottts/:"+jokeID+".svg"
		$(".robot"+num).attr("src", "https://avatars.dicebear.com/v2/bottts/:"+jokeID+".svg");
		$(".joke"+num).html(jokeText);
	}
}

function makeRobot(num){
	console.log("makeRobot("+num+")");
	var newDiv = $("<div class=\"row joke-row\">");
	newDiv.html("\
	<div class=\"col-sm-3 robot-face\"><br \>\
	<img class=\"robot"+num+"\" src=\"https://avatars.dicebear.com/v2/bottts/:a.svg\"><br \>\
	</div><br \>\
	<div class=\"col-sm-9 joke-text\"><br \>\
	<div class=\"joke"+num+"\">ERROR</div><br \>\
	</div>");
	$(".joke-robots").append(newDiv);
	rollJoke(num);
}