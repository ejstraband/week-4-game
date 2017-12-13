// global variables
var wins = 0;
var losses = 0;
var targetScore = 0;
var myScore = 0;
var crystalValues = [0, 0, 0, 0];

console.log("current values: " + wins, losses, targetScore, myScore, crystalValues);

// primary functions
function gameStart() {
	generateTargetScore();
	generateCrystalValues();
}

function generateTargetScore() {

}

function generateCrystalValues() {

}

function win() {
	wins = (wins+1);
	gameStart();
}

function lose() {
	losses = (losses+1);
	gameStart();	
}

// main app logic

$("crystal").on("click", function() {
	var clickedCrystal = $("")

});