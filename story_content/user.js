function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5gmYFoyjwDY":
        Script1();
        break;
      case "6bahBN8Dxi0":
        Script2();
        break;
      case "6O7Mz0EC0jS":
        Script3();
        break;
      case "6bKm0Lwq6a1":
        Script4();
        break;
      case "6gokRJEm2kE":
        Script5();
        break;
      case "5jyAkHViGt9":
        Script6();
        break;
      case "6PTqbMhsg0K":
        Script7();
        break;
      case "5o8UqIwSZOY":
        Script8();
        break;
      case "5jLBAaz53T2":
        Script9();
        break;
      case "6fUzyWbFhzp":
        Script10();
        break;
      case "5tiSXEBMPpf":
        Script11();
        break;
      case "6AQhWxQXDze":
        Script12();
        break;
      case "6hqkcQsOLPs":
        Script13();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"bg_audio.mp3";
audio.load();
audio.play();
}

function Script2()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.3;
}

function Script3()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script5()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script13()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

