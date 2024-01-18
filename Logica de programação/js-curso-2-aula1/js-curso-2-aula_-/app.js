// const title = document.querySelector('h1');
// title.innerHTML = 'Jogo do número secreto 2';
// const paragraph = document.querySelector('p');
// paragraph.innerHTML = 'Escolha um número entre 1 e 100';

let sortedNumbers = [];
const maxNumbers = 30;

const textInput = document.querySelector('input');

const showTextInScreen = (tag, text) => {
  let field = document.querySelector(tag);
  responsiveVoice.speak(text, 'Brazilian Portuguese Female', { rate: 1.2 });
  return (field.innerHTML = text);
};

const showInitialMessage = () => {
  showTextInScreen('h1', 'Jogo do número secreto');
  showTextInScreen('p', `Escolha um número entre 1 e ${maxNumbers}`);
};
showInitialMessage();

const generateRandomNumber = () => {
  let randomNumber = parseInt(Math.random() * maxNumbers + 1);

  if (sortedNumbers.length === maxNumbers) {
    sortedNumbers = [];
  }

  if (sortedNumbers.includes(randomNumber)) {
    return generateRandomNumber();
  } else {
    sortedNumbers.push(randomNumber);
  }

  return randomNumber;
};

const clearInput = () => {
  textInput.value = '';
};

let secretNumber = generateRandomNumber();
let tries = 0;

function verificarChute() {
  tries++;
  let inputValue = Number(textInput.value);

  if (secretNumber === inputValue) {
    showTextInScreen('h1', 'Parabéns, você acertou!');
    showTextInScreen(
      'p',
      `O número correto é ${secretNumber} e você levou ${tries} tentativa${
        tries > 1 ? 's' : ''
      } para acerta-lo`,
    );

    document.getElementById('reiniciar').removeAttribute('disabled');
  } else if (secretNumber > inputValue) {
    showTextInScreen('h1', 'Errou!');
    showTextInScreen('p', `O número é maior que ${inputValue}`);
  } else if (secretNumber < inputValue) {
    showTextInScreen('h1', 'Errou!');
    showTextInScreen('p', `O número é menor que ${inputValue}`);
  }

  clearInput();
}

function restartGame() {
  secretNumber = generateRandomNumber();
  tries = 0;
  showInitialMessage();

  document.getElementById('reiniciar').setAttribute('disabled', true);
}
