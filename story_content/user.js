function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5cXltSO2ci3":
        Script1();
        break;
      case "5rnZbrnBB7y":
        Script2();
        break;
      case "6cyVizoNqGO":
        Script3();
        break;
      case "6pNsMFFxnOE":
        Script4();
        break;
      case "6LRDq5aH35I":
        Script5();
        break;
      case "5dghtM5vKvj":
        Script6();
        break;
      case "5onILIzxBSe":
        Script7();
        break;
      case "6mIXK2rBJRl":
        Script8();
        break;
      case "6EtcnrQ5g4v":
        Script9();
        break;
      case "60sRFiPijLE":
        Script10();
        break;
      case "6W5JW6lEHx2":
        Script11();
        break;
      case "5vpPgtR50jy":
        Script12();
        break;
      case "6P2rCfHOYrL":
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

