let currentPlayer = 'circle';

const playerIcon = document.querySelector('img');

if (currentPlayer === 'circle') {
  playerIcon.src = 'circle.svg';
}

const button1 = document.querySelector('button:nth-child(1)');
const button2 = document.querySelector('button:nth-child(2)');
const button3 = document.querySelector('button:nth-child(3)');
const button4 = document.querySelector('button:nth-child(4)');
const button5 = document.querySelector('button:nth-child(5)');
const button6 = document.querySelector('button:nth-child(6)');
const button7 = document.querySelector('button:nth-child(7)');
const button8 = document.querySelector('button:nth-child(8)');
const button9 = document.querySelector('button:nth-child(9)');
const button10 = document.querySelector('button:nth-child(10)');

const playedOut = (event) => {
  const move = event.target.classList;
  event.target.disabled = 'true';
  if (currentPlayer === 'circle') {
    move.value = 'board__field--circle';
    currentPlayer = 'cross';
    playerIcon.src = 'cross.svg';
  } else {
    currentPlayer === 'cross';
    move.value = 'board__field--cross';
    currentPlayer = 'circle';
    playerIcon.src = 'circle.svg';
  }
};

button1.addEventListener('click', playedOut);
button2.addEventListener('click', playedOut);
button3.addEventListener('click', playedOut);
button4.addEventListener('click', playedOut);
button5.addEventListener('click', playedOut);
button6.addEventListener('click', playedOut);
button7.addEventListener('click', playedOut);
button8.addEventListener('click', playedOut);
button9.addEventListener('click', playedOut);
button10.addEventListener('click', playedOut);

const navigationFieldBlue = document.querySelector('.navigation__field--blue');

const verification = (event) => {
  const restart = confirm('Opravdu chceš začít novou hru?');
  if (!restart) {
    event.preventDefault();
  }
};

//navigationFieldBlue.addEventListener('click', verification);

// Get the element to attach the event listener to
const myButton = document.querySelector('#my-button');

// Make sure the element exists before calling addEventListener
if (myButton) {
  // Add the event listener
  myButton.addEventListener('click', () => {
    console.log('Button clicked!');
  });
}
