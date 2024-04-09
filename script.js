window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the function if no associated audio
    audio.currentTime = 0; // rewind to the start
    audio.play();
    key.classList.add('playing');
  });
  
  function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip if it's not a transform
    this.classList.remove('playing');
  }
  
  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keyup', function(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!key) return; // stop the function if no associated key
    key.classList.remove('playing');
  });