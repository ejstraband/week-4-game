// global variables
var wins = 0;
var losses = 0;
var targetScore = 0;
var myScore = 0;
var crystalValues = [0, 0, 0, 0];
// var crystalValues = 0;

// primary functions
function gameStart() {
	console.log("This is a new game.")
	console.log("current wins: " + wins);
	console.log("current losses: " + losses);
	generateTargetScore();
	$("#targetScore").html("<p>" + targetScore + "</p>");
	generateCrystalValues();
	assignCrystalValues();
	myScore = 0;
	$("#yourScore").html(myScore);
}

function generateTargetScore() {
	console.log("Generating Target Score");
	targetScore = (Math.floor((Math.random() * 102) + 19));
	console.log(targetScore);
}

function generateCrystalValues() {
		console.log("Generating Crystal Values");
	for (var i = 0; i < crystalValues.length; i++) {
	crystalValues[i] = (Math.floor((Math.random() * 12) + 1));
	console.log(crystalValues[i]);
	}
}

function assignCrystalValues() {
	console.log("Assigning Crystal Values");
	$("#crystal-1").attr("value", crystalValues[0]);
	$("#crystal-2").attr("value", crystalValues[1]);
	$("#crystal-3").attr("value", crystalValues[2]);
	$("#crystal-4").attr("value", crystalValues[3]);
}

// function scoring() {
	// var currentPointValue = $("value")
	// console.log("currentPointValue = " + currentPointValue);

// }

function winChecker() {
	if (myScore === targetScore) {
		win();
	} else if (myScore > targetScore) {
		lose();
	}
}

function win() {
	alert("You Won!")
	wins = (wins+1);
	$("#wins").html("<p> Wins: " + wins + "</p>");
	gameStart();
}

function lose() {
	alert("You Lost!")
	losses = (losses+1);
	$("#losses").html("<p> Losses: " + losses + "</p>");	
	gameStart();	
}

// Debugging Zone
	// set testNumber to 19 or 120 to debug the inital score generator
	// var testNumber = 1;
	// set testVariable to crystalValues or targetScore
	// var testVariable = crystalValues;
	// generateTargetScore() or generateCrystalValues()
	// while (crystalValues !== (testNumber)) {generateCrystalValues();}

	// generateCrystalValues();

// main app logic

gameStart();

$("#crystal-1").click( function() {
	var currentCrystalValue = $("#crystal-1").attr("value");
	currentCrystalValue = (parseInt(currentCrystalValue));
	myScore = (myScore + currentCrystalValue);
	console.log("myScore is now: " + myScore);
	$("#yourScore").html(myScore);
	winChecker();
});

$("#crystal-2").click( function() {
	var currentCrystalValue = $("#crystal-2").attr("value");
	currentCrystalValue = (parseInt(currentCrystalValue));
	myScore = (myScore + currentCrystalValue);
	console.log("myScore is now: " + myScore);
	$("#yourScore").html(myScore);
	winChecker();
});

$("#crystal-3").click( function() {
	var currentCrystalValue = $("#crystal-3").attr("value");
	currentCrystalValue = (parseInt(currentCrystalValue));
	myScore = (myScore + currentCrystalValue);
	console.log("myScore is now: " + myScore);
	$("#yourScore").html(myScore);
	winChecker();
});

$("#crystal-4").click( function() {
	var currentCrystalValue = $("#crystal-4").attr("value");
	currentCrystalValue = (parseInt(currentCrystalValue));
	myScore = (myScore + currentCrystalValue);
	console.log("myScore is now: " + myScore);
	$("#yourScore").html(myScore);
	winChecker();
});
