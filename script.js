$(document).ready(function () {
  var drumPad = $('.drum-pad');
  var display = $('#display');
  drumPad.on('click', function (e) {
    var audioEl = e.target.children[0];
    var desc = e.target.dataset.name;
    display.text(desc);
    audioEl.currentTime = 0;
    audioEl.play();
  });

  //listen for keypress
  $(document).on('keydown', function (e) {
    var key = '#' + e.originalEvent.code.slice(-1);
    var audio = $(key);

    if ((audio.nodeName = 'AUDIO')) {
      audio.parent().eq(0).trigger('click');
    }
  });
});
