const playingDice = function (number1, number2) {
    const numberOfDices = parseInt(number1);
    const numberOfFaces = parseInt(number2);
    
    if (Number.isNaN(numberOfDices) || Number.isNaN(numberOfFaces)) {
        return 'Please enter a number';
    }
    const dices = []
    for (let i = 1; i <= numberOfDices; i++) {
        dices.push(Math.floor(Math.random() * numberOfFaces) + 1);
    }
    return dices;
}

module.exports = {playingDice};