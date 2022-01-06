function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6A0scqFkCFh":
        Script1();
        break;
      case "5qXr3YaZMRZ":
        Script2();
        break;
      case "5rZDk7NlyxW":
        Script3();
        break;
      case "6bPtJBQKDA2":
        Script4();
        break;
      case "5vecEhtAz8Y":
        Script5();
        break;
      case "5fJbhDxUDTJ":
        Script6();
        break;
      case "6LRHq9V15Su":
        Script7();
        break;
      case "60qyXvX5UXY":
        Script8();
        break;
      case "5WPAQdvyumH":
        Script9();
        break;
      case "5onYOuMnQtT":
        Script10();
        break;
      case "5vGjcktsCrb":
        Script11();
        break;
      case "6eKQqVrMIHC":
        Script12();
        break;
      case "6ZXVBnPSXOo":
        Script13();
        break;
      case "5WIybzMNpMk":
        Script14();
        break;
      case "5vfcZMDM39e":
        Script15();
        break;
      case "5j1d6selqG4":
        Script16();
        break;
      case "6NHcGIIjKbD":
        Script17();
        break;
      case "5mBoraxeWVe":
        Script18();
        break;
      case "6BoKcCWMM3G":
        Script19();
        break;
      case "6Liw1i5FxDE":
        Script20();
        break;
      case "5x1O2bf87tU":
        Script21();
        break;
      case "5wDPkxFkE1I":
        Script22();
        break;
      case "63pxK3uo5z6":
        Script23();
        break;
      case "6krz4z6KIK5":
        Script24();
        break;
      case "6Zebw31EGgV":
        Script25();
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
audio.volume = 0.1;
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
audio.volume = 0.1;
}

function Script3()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script4()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script5()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script7()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script9()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script11()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script13()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script14()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script15()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script16()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script17()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script18()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script19()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script20()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script21()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script22()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script23()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script24()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script25()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

