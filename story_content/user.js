function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5dykcug8qx9":
        Script1();
        break;
      case "6gCdm6fU31Q":
        Script2();
        break;
      case "5gePXHNmkkd":
        Script3();
        break;
      case "616KO6Gi96c":
        Script4();
        break;
      case "5bXXJAkaklU":
        Script5();
        break;
      case "6LcTfojoe3k":
        Script6();
        break;
      case "5mSCocPzdb5":
        Script7();
        break;
      case "6Psls3FXeQi":
        Script8();
        break;
      case "5ifKW3ZiEZK":
        Script9();
        break;
      case "5rdaoicehVU":
        Script10();
        break;
      case "69z3gBGdSkN":
        Script11();
        break;
      case "62rt4jdPQE2":
        Script12();
        break;
      case "5qE1hGhq3Ge":
        Script13();
        break;
      case "6Tq1nvGQYZD":
        Script14();
        break;
      case "5inIUHR3i28":
        Script15();
        break;
      case "5fRGbNqEKMG":
        Script16();
        break;
      case "6DNZoI97xYM":
        Script17();
        break;
      case "5kKRAd5Kaa5":
        Script18();
        break;
      case "69RYAQmIl3e":
        Script19();
        break;
      case "6SM6v3H57Ol":
        Script20();
        break;
      case "6TEPH45KaWR":
        Script21();
        break;
      case "6fLJLEyRcGr":
        Script22();
        break;
      case "65oCZWg3NxL":
        Script23();
        break;
      case "6k26ynUltBN":
        Script24();
        break;
      case "5VcWIz38Gpp":
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

