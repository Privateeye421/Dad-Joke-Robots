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
$(".mainPage").append(newDiv);

//<div class="col-sm-3 robot-face">
//	<img class="robot0" src="https://avatars.dicebear.com/v2/bottts/:robot0.svg">
//</div>
//<div class="col-sm-9 joke-text">
//	<div class="joke0">
//		TEXT A:LKSJDFLK A:LKJSDLFKJ A: V2
//	</div>
//</div>