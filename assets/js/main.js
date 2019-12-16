function playButton() {
  var video = document.getElementById('cat');
  if (video.paused) {
      video.play();
  }else{
      video.currentTime = 0
  }
}
