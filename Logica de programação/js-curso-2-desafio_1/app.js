const title = document.querySelector('h1');

title.innerHTML = 'Hora do Desafio';

const showMessageOnConsole = () => {
  console.log('O botão foi clicado');
};

const showAlert = () => {
  alert('Eu amo JS');
};

const openPrompt = () => {
  const city = prompt('Digite o nome de uma cidade brasileira');

  alert(`Estive em ${city} e lembrei de você`);
};

const sumNumbers = () => {
  const number1 = Number(prompt('Digite o primeiro número'));
  const number2 = Number(prompt('Digite o segundo número'));

  const sum = number1 + number2;

  alert(sum);
};
