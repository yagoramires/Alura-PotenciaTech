alert('Boas vindas ao jogo do número secreto');

let numberRange = 100;

let secretNumber = Math.floor(Math.random() * numberRange + 1);
console.log(secretNumber);

let userValue;
let userTries = 0;

while (userValue != secretNumber) {
  userValue = prompt(`Escolha um número entre 1 e ${numberRange}`);

  userTries++;

  // Se o chute for igual ao numero secreto faça algo
  if (userValue == secretNumber) {
    break;
  } else {
    if (userValue < secretNumber) {
      alert(`O número secreto é maior que ${userValue}`);
    } else {
      alert(`O número secreto é menor que ${userValue}`);
    }
  }
}

alert(
  `Isso aí! Você descobriu o numero secreto ${secretNumber} com ${userTries} ${
    userTries > 1 ? 'tentativas' : 'tentativa'
  }`,
);
