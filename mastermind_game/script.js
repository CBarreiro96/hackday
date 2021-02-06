// This select all the colors options
const btnSelector = document.querySelectorAll('.item');
// All holes in the player table
const holes = document.querySelectorAll('.row .hole');
// All the holes for the checker table that shows the hints
const miniHoles = document.querySelectorAll('.row .hole .mini-hole');
// The four colors selected for the code to crack
const optionColors = document.querySelectorAll('.options .hole');
// The Restart button
const restart = document.getElementById('restart');
// The Undo button
const undo = document.getElementById('undo');
// Activate second player for pattern selection
const btnSecondPlayer = document.getElementById('2player');
//Variables
var index = 41;
var index2 = 32;
var insertedColors = 0;
var insertedColors2 = 0;
var rowsCompleted = 0;
var hints = 0;
var winner = 0;
var rowsCompleted2 = 0;
let colors = ["green", "red", "white", "yellow", "fucsia", "empty"]
    //take the last 4 colors of the random array
let final = [ "red", "red", "fucsia", "yellow" ]//randomFinal().slice(2);
// The four choices for each row
let choices = [];

btnSecondPlayer.addEventListener('click', () => alert("In development"));

// This triggers the random selection for PC player
function randomFinal() {
    const finalFinal = [...new Array(6)].map(color => {
        const random = Math.floor(Math.random() * Math.floor(colors.length)); //Colocamos random los colores
        return colors[random]; // Returns random selection.
    })
    return finalFinal;
};

// Starts the game with random selection for PC player
function pcGame() {
    if (rowsCompleted == 0 && index == 41) {
        randomFinal();
        alert("The game has Started! Good Luck!");
    } else {
        alert("Finish the actual game or click on Restart");
    }
}

// Event for click on any color from the options table
btnSelector.forEach(btn => {
    const color = btn.classList[1] // color selector
    btn.addEventListener("click", () => selectColor(color)) // places color in row

})

// Undo the previous move of the player
function undoGame() {
    if (insertedColors > 0 && insertedColors < 4) {
        index -= 1;
        insertedColors -= 1;
        holes[index].classList.remove('green', 'red', 'white', 'empty', 'yellow', 'fucsia');
    }
}

// Restart the whole game and return every value to default
function restartGame() {
    let i;
    final = randomFinal().slice(2);
    for (i = 9; i < 45; i++) {
        holes[i].classList.remove('green', 'red', 'white', 'empty', 'yellow', 'fucsia');
    }
    for (i = 0; i < 35; i++) {
        miniHoles[i].classList.remove('full', 'half', 'checked');
    }
    for (i = 0; i < 4; i++) {
        optionColors[i].classList.remove('green', 'red', 'white', 'empty', 'yellow', 'fucsia');
    }
    index = 41;
    index2 = 32;
    insertedColors = 0;
    insertedColors2 = 0;
    rowsCompleted = 0;
    hints = 0;
    winner = 0;
    rowsCompleted2 = 0;
}

// Alert that show a message to player saying that the game is over
function gameOver() {
    if (rowsCompleted == 9 && winner != 4) {
        let i;
        for (i = 0; i < 4; i++) {
            optionColors[i].classList.add(final[i]);
        }
        alert("Game Over my friend!!! Restart and Try Again");
    }
    if (winner == 4) {
        for (i = 0; i < 4; i++) {
            optionColors[i].classList.add(final[i]);
        }
        alert("You won!! You are the Best!! Can you make it Again?")
    }
}

// Checks the answer against the final code & adds the corresponding class
function check(colors) {
    const checks = [];
    const pendingChecks = [...final]; //Copy of final
    //Checks color and position
    colors.forEach((color, index) => {
        if (final[index] === color) {
            checks.push("full");
            pendingChecks[index] = "checked";
        }
    })
    colors.forEach((color, index) => {
        if (pendingChecks.includes(color) && final.includes(color)) {
            checks.push("half");
            let temp = pendingChecks.indexOf(color)
            pendingChecks[temp] = "checked";
        }
    })
    return checks;
}

// Updates the mini-Holes from the checker table to give a hint to the player
function updateHints() {
    let i;
    for (i = 0; i < 4; i++) {
        if (final[i] === choices[i]) {
            winner += 1
        }
    };

    if (winner != 4) {
        // Returs feedback if answer is not a winner
        const checkArray = check(choices);
        let i;
        for (i = 0; i < checkArray.length; i++) {
            if (checkArray[i] === "full") {
                miniHoles[index2].classList.add("full")
                index2 += 1;
            } else if (checkArray[i] === "half") {
                miniHoles[index2].classList.add("half")
                index2 += 1;
            }

            insertedColors2 += 1;
        }
        if (insertedColors2 == checkArray.length && rowsCompleted < 9) {
            index2 -= (4 + checkArray.length);
            insertedColors2 = 0;
        }
        choices = [];
        winner = 0;

    }

}
    // Select the color that is clicked on the options table
function selectColor(color) {
    holes[index].classList.add(color);
    if (index != 5) {
        index += 1;
    }
    insertedColors += 1;
    choices.push(color)
    if (insertedColors == 4 && rowsCompleted < 9) {
        index -= 8;
        insertedColors = 0;
        rowsCompleted += 1;
        updateHints();
        gameOver();
    }
}
