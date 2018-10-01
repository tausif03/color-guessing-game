var square = document.querySelectorAll(".square");
var reset = document.querySelector("#resetButton");
var modeButton = document.querySelectorAll(".mode");
var messageDisplay = document.querySelector("#messageDisplay");

var numSquare = 6;
var colorPicked;

init();

function init(){
	setRandomColor();
	setUpSquare();
	setUpResetButton();
	setUpModeButton();
}

function setUpSquare(){
	for(var i = 0; i < square.length; i++){
	square[i].addEventListener("click", function(){
	if(this.style.backgroundColor === colorPicked){
		messageDisplay.textContent = "Correct!";
		reset.textContent = "Play Again?"
		for(var i = 0; i < square.length; i++){
			square[i].style.backgroundColor = colorPicked;
			document.querySelector("h1").style.backgroundColor = colorPicked;
	     }
	 }
	else{
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";	
	}
})
}
}

function setUpResetButton(){
	reset.addEventListener("click", function(){
	setRandomColor();	
});
}


function setUpModeButton(){
	for(var i = 0 ; i < modeButton.length; i++){
	 modeButton[i].addEventListener("click",function(){
	  modeButton[0].classList.remove("selected");
	  modeButton[1].classList.remove("selected");
	  this.classList.add("selected");
	  this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
	  setRandomColor();
	  if(numSquare === 3){
	  	for(var i = 3; i < square.length; i++){
	  		square[i].style.display = "none";
	    }
	  }
	}) 
}
}

function setRandomColor(){
	for(var i = 0; i < numSquare; i++){
	square[i].style.backgroundColor = getRandomColor();
	square[i].style.display = "block";
	}
	colorPicked = randomSquareColor();
	document.querySelector("#pickedColor").textContent = colorPicked;
	reset.textContent = "New Colors";
	messageDisplay.textContent = '';
	document.querySelector("h1").style.backgroundColor = 'steelBlue';
}  

function getRandomColor(){
	var red = (Math.floor(Math.random()* 256));
	var blue = (Math.floor(Math.random()* 256));
	var green = (Math.floor(Math.random()* 256));
	var color = "rgb(" + red + ", " + blue + ", " + green + ")";
    return color;
}

function randomSquareColor(){
	var SquareColor = square[(Math.floor(Math.random() * numSquare))].style.backgroundColor;
	return SquareColor;
} 