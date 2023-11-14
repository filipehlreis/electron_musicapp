const $ = require('jquery');
const mm = require('music-metadata');
let songData = { path: [], title: [] };
let audioPlayer = $('audio').get(0);

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

function convertDurationFormat(number) {
  return `${padZero(parseInt((number / 60) % 60))}:${padZero(
    parseInt(number % 60),
  )}`;
}

function padZero(value) {
  return value < 10 ? '0' + value : value;
}

function musicSelected() {
  let files = $('input').get(0).files;

  console.log(files);

  for (let i = 0; i < files.length; i++) {
    let { path } = files[i];
    mm.parseFile(path, { native: true }).then((metadata) => {
      songData.path[i] = path;
      songData.title[i] = metadata.common.title;

      console.log(metadata.common.title);
      console.log(metadata.format.duration);
      console.log(metadata.common.artist);

      let songRow = `
      <tr ondblclick="playSong(${i})">
        <td>${metadata.common.title}</td>
        <td>${metadata.common.artist}</td>
        <td>${convertDurationFormat(metadata.format.duration)}</td>
      </tr>
      `;

      $('#table-body').append(songRow);
    });
  }
}

function playSong(index) {
  console.log(index);
  console.log(songData.title[index]);
  audioPlayer.src = songData.path[index];
  audioPlayer.load();
  audioPlayer.play();
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
