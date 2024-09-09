const playingDice = function () {
    const numberOfDices = parseInt(prompt("Please enter the number of dice."));
    const numberOfFaces = parseInt(prompt("Please enter the number of faces on the dice"));
    const dices = []
    for (let i = 1; i <= numberOfDices; i++) {
        dices.push(Math.floor(Math.random() * numberOfFaces) + 1);
    }
    return dices;
}
console.log(playingDice());