const $ = require('jquery');

const addButton = document.getElementById('add_button');
const clearButton = document.getElementById('clear_button');
const playButton = document.getElementById('play_button');
const forwardButton = document.getElementById('forward_button');
const backwardButton = document.getElementById('backward_button');

addButton.addEventListener('click', () => {
  console.log('choose music');
  // $('input').trigger('click');
  $('#input_file').trigger('click');
});

function musicSelected() {
  let files = $('input').get(0).files;

  console.log(files);
}

clearButton.addEventListener('click', () => {
  console.log('clearButton');
});

playButton.addEventListener('click', () => {
  console.log('playButton');
});

forwardButton.addEventListener('click', () => {
  console.log('forwardButton');
});

backwardButton.addEventListener('click', () => {
  console.log('backwardButton');
});
