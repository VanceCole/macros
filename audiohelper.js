let src = encodeURI("music/sfx/example.mp3");
AudioHelper.play({
  src,
  volume: 1,
  autoplay: true,
  loop: false
}, true);