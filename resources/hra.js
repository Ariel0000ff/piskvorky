let currentPlayer = 'circle';
const playerIcon = 'img';

const play = (event) => {
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

document.querySelector('td:nth-child(1) button');

document.querySelector('td:nth-child(2) button');

document.querySelector('td:nth-child(3) button');

document.querySelector('td:nth-child(4) button');

document.querySelector('td:nth-child(5) button');

document.querySelector('td:nth-child(6) button');

document.querySelector('td:nth-child(7) button');

document.querySelector('td:nth-child(8) button');

document.querySelector('td:nth-child(9) button');

document.querySelector('td:nth-child(10) button');
