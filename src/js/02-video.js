import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
console.log(Player);

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('play', function () {
  console.log(timeupdate.seconds);
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});


player.on(
  'timeupdate',
  throttle(data => {
    localStorage.setItem('videoplayer-current-time', data.seconds);
  }, 1000)
);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });