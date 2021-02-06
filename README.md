# Welcome to Holberton's Mastermind Challenge

Here you can find the Mastermind game version made in Javascript and HTML/CSS
for the HackDay of the Cohort 12 in Holberton School Campus Bogota - Colombia

              :computer: ¡This is really funny project! :computer:



## Team members <img src="https://user-images.githubusercontent.com/66263776/91668517-ebe66c80-ead2-11ea-9f3a-cb4fd48c62a5.gif" width="50" height="30">

- **Daniel Lorenzo** - [dlscoccia](https://github.com/dlscoccia)
- **Julian Camilo Torres** - [Camilo6](https://github.com/Camilo6)
- **Danilo Romero** - [daniloromero](https://github.com/daniloromero)
- **Camilo Barreiro**  - [cbarreiro96](https://github.com/cbarreiro96)
- **Gabriel Cifuentes** - [gcifuentess](https://github.com/gcifuentess)



## Languages
<img src="https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23f7de1e" alt="JavaScript"/>
<img src="https://img.shields.io/badge/html5-%23e34f26.svg?&style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
<img src="https://img.shields.io/badge/CSS-%233573b5.svg?&style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>

JavaScript, HTML and CSS, where the selected languages taking into account the "ready to go" feature desired for this project. Having this solution developed in this languages, gives the possibility to mount it in almost any web server or even in a GitHub Page, so the visitant can play and review it right away.

The graphical interface was made on HTML and CSS and flow for the game in JavaScript which modifies the HTML/CSS of the application.



## Algorithm

<p align="center">
  <img src="https://raw.githubusercontent.com/holberton-bog-0620/hackday/gh-pages/Flow_Chart.png">
</p>



## How to play

### Rules of the game
1. The game can be played with player-machine or a second player.
2. The second player (or the machine) becomes the codemaker, and the first player the codebreaker
3. The codemaker chooses a pattern of four code colors. These group of color can be repeated or different.
4. The codebreaker tries to guess the pattern, in both order and color, within eight turns. Each guess is made by placing a row of code pegs on the decoding board.
5. Once placed, the codemaker provides feedback placing a colored or black key peg is placed for each code peg from the guess which is correct in both color and position, but if the key peg indicates the existence of a correct color code peg placed in the wrong position, the color will be white.


### Instructions to play online

1) Access the game. [Play it here.](https://holberton-bog-0620.github.io/hackday/mastermind_game)

2) Select PC Player or 2nd Player

2.1) if 2nd Player was selected, the second player must choose the code colors picking each one in the black botton section.

    <img src="https://raw.githubusercontent.com/holberton-bog-0620/hackday/gh-pages/Select_player.png"> 
    <img src="https://raw.githubusercontent.com/holberton-bog-0620/hackday/gh-pages/color_options.png"> 

3) Pick 4 desired colors to guess the code. (Until you pick the 4 colors, you can hit the "Undo" button)

<img src="https://raw.githubusercontent.com/holberton-bog-0620/hackday/gh-pages/color_options.png">

4) Analyze the feedback:

4.1) Each black dot means a match in color and position

4.2) Each white dot means only a match in color, not in position.

   <img src="https://raw.githubusercontent.com/holberton-bog-0620/hackday/gh-pages/checker.png"> 

5) You have 9 rounds to try, after that you lose and the machine will show you the correct ansquer

<center>
<button href="https://holberton-bog-0620.github.io/hackday/mastermind_game"><b>¡PLAY!</b></button>
</center>



## Want to peek a pice of the code?

```javascript
// Checks the answer against the final code & adds the corresponding class
function check(colors) {
    const checks = [];
    const pendingChecks = [...final]; //Copy of final
    //Checks color and position
    colors.forEach((color, index) => {
        if (final[index] === color) {
            checks.push("full");
            pendingChecks[index] = "checked";
        } else if (pendingChecks.includes(color) && final.includes(color)) {
            checks.push("half");
            let temp = pendingChecks.indexOf(color)
            pendingChecks[temp] = "checked";
        }
    })
    return checks;
}
```



## Look at the Board

<center>
<img src="https://raw.githubusercontent.com/holberton-bog-0620/hackday/gh-pages/Mastermind-The-Game.png">
</center>