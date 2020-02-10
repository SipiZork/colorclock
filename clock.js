function colorClock() {
  var date = new Date();
  var hours = ("0" + date.getHours()).slice(-2);
  var minutes = ("0" + date.getMinutes()).slice(-2);
  var seconds = ("0" + date.getSeconds()).slice(-2);
  
  var bgHours = 255 - (hours * 10);
  var bgMinutes = 255 - (minutes * 4);
  var bgSeconsd = 255 - (seconds * 4);
  
  var clockFace = hours + ':' + minutes + ':' + seconds;
  
  var bgColor = 'rgba(' + bgHours + ', ' + bgMinutes + ', ' + bgSeconsd +')';
  
  var fontBlackColor = 0 + (hours * 10);
  
  document.getElementById('clock').innerHTML = clockFace;
  document.body.style.background = bgColor;
}

setInterval(function() {
  colorClock();
},1000);