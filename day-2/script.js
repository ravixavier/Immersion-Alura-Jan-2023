const secretNumber = 237;

while (secretNumber != guess) {
  var guess = prompt("Adivinhe o numero secreto de 0 a 1000...");

  if (guess == secretNumber) {
    alert("Parabéns! Você adivinhou o numero secreto... Otário! (╯▔皿▔)╯ ");
  } else if (guess > secretNumber) {
    alert(
      "Oh no! Você errou otário! O numero secreto é menor! 👎🏾 Tente outra vez... se for inteligente... Eu sei que vc não é."
    );
  } else if (guess < secretNumber) {
    alert(
      "Oh no! Você errou otário! O numero secreto é maior! 👎🏾 Tente outra vez... se for inteligente... Eu sei que vc não é."
    );
  }
}
