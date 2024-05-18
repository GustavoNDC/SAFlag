var audio = new Audio('assets/af.mp3');
function changeImage() {
    var image = document.getElementById('image');
    if (image.src.match('black.png')) {
      image.src = 'assets/black2.png';
      audio.play();

    } else {
      image.src = 'assets/black.png';
      audio.pause();

    }
  }
  