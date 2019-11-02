var goadrichJokesURL = 'http://api.icndb.com/jokes/random?firstName=Mark&limitTo=[nerdy]&lastName=Goadrich';
var robotPreURL = "https://avatars.dicebear.com/v2/bottts/:";
var totalRobots=1;

console.log("Hello world!");
makeNewRobot();
	
function makeNewRobot() {
	console.log("makeNewRobot()");
	makeRobot(totalRobots);
	totalRobots++;
}

function rollAll() {
	console.log("rollAll()");
	var i;
	for (i = 0; i < totalRobots; i++) {
		console.log("var="+i);
		rollJoke(i);
	}
}

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
		var robotURL=robotPreURL+jokeID+".svg";
		console.log("robotURL="+robotURL);
		var jokeText=requestedJoke.value.joke;
		console.log("jokeID="+jokeText);
		$(".robot"+num).attr("src", robotURL);
		$(".joke"+num).html(jokeText);
	}
}

function makeRobot(num){
	console.log("makeRobot("+num+")");
	var newDiv = $("<div class=\"row joke-row\">");
	newDiv.html("<div class=\"col-sm-3 robot-face\"><br \>\
	<img class=\"robot"+num+"\" src=\"https://avatars.dicebear.com/v2/bottts/:a.svg\"><br \></div><br \>\
	<div class=\"col-sm-9 joke-text\"><br \>\
	<div class=\"joke"+num+"\">ERROR</div><br \>\
	</div>");
	$(".joke-robots").append(newDiv);
	rollJoke(num);
}