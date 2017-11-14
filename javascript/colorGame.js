var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetBtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");



init();

function init() {
    
    setupModeButton();
    setupSquares();
    reset();
}


function setupModeButton() {
    //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
            /*         if(thijs.textContent === "Easy"){
                        numSquares = 3;
                    }else{
                        numSquares = 6;
                    } */
            reset();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {

        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            //grab color of clicked squares
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                changeColor(pickedColor);
                document.querySelector("h1").style.backgroundColor = pickedColor;
                document.querySelector("#reset").textContent = "PLAY AGAIN?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!"
            }
        });
    }
}

resetBtn.addEventListener("click", function () {
    reset();
})



function reset() {
    //Generate all new colors
    colors = getnerateRandomColors(numSquares);

    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;

    messageDisplay.textContent = "";
    resetBtn.textContent = "NEW COLORS";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    document.querySelector("h1").style.backgroundColor = "steelblue";
}

function changeColor(color) {
    //loop through all squares
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function getnerateRandomColors(num) {
    //make an array
    var arr = []
    //add num random colors to array
    //repeat num items
    for (var i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array     
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "green" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")"
}