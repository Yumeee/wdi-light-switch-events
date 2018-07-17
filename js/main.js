var background = document.querySelector('.light');
var lightSwitch = document.querySelector('.switch.on');
var text = document.querySelector('.status');

lightSwitch.addEventListener('click', function() {
  background.classList.toggle('dark');
  lightSwitch.classList.toggle('off');

  if (lightSwitch.classList.contains('off')) {
    text.innerHTML = "Hey, who turned off the lights?";
  }
  else {
    text.innerHTML = "It's so bright in here!";
  }
});
