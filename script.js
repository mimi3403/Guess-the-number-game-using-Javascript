const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  prevGuesses: [],
  play: function () {
    this.secretNum =
      Math.floor(Math.random() * (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
    let winner = false;

    while (winner === false) {
      let guess = this.getGuess();
      this.prevGuesses.push(guess);
      winner = this.render(guess);
      let keepGoing = confirm(`Shall we continue?`)
      if (!keepGoing) {
        alert("Game Over");
        break;
      };
    }
  },


  getGuess: function () {
    do {
      var guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}:`));
    } while (isNaN(guess) || guess < this.smallestNum || guess > this.biggestNum)

    return guess;
    //  guess = parseInt(guess);
    //TODO: We might need to add a return value
  },

  render: function (guessValue) {
    // does guess match the secretNum?
    if (guessValue === this.secretNum) {
      alert(`Congrats! You guesses the number in ${this.prevGuesses.length} guesses!`)
      return true;
    } else {
      alert(`Your guess is too ${guessValue > this.secretNum ? "high" : "low"}
      Previous guesses: ${this.prevGuesses}`)
      return false;
    }
  }
};

game.play();