function ExecuteScript(strId)
{
  switch (strId)
  {
      case "67YEIVIag38":
        Script1();
        break;
      case "5f309LcYAlb":
        Script2();
        break;
      case "6cSZvE0zRus":
        Script3();
        break;
      case "67h1f6sEXGJ":
        Script4();
        break;
      case "5xqwabzdbik":
        Script5();
        break;
      case "5wAeKDVo3dD":
        Script6();
        break;
      case "6qamNb1LlbH":
        Script7();
        break;
      case "5yXMtz5zkeX":
        Script8();
        break;
      case "6iHDST2rfLw":
        Script9();
        break;
      case "5jma8Q4Zbfq":
        Script10();
        break;
      case "625V85iezjr":
        Script11();
        break;
      case "65f3BF0MjxH":
        Script12();
        break;
      case "6TLbFDvIojC":
        Script13();
        break;
      case "6pNsVXEEDJR":
        Script14();
        break;
      case "5eDiUZ7GxtV":
        Script15();
        break;
      case "6XvZ0QqUQt5":
        Script16();
        break;
      case "6B6RH7Hrd9T":
        Script17();
        break;
      case "5x819a4muTD":
        Script18();
        break;
      case "6Li6vJnDZPP":
        Script19();
        break;
      case "692vj4lZtdP":
        Script20();
        break;
      case "6HvbvATedC3":
        Script21();
        break;
      case "6bQCanPemRj":
        Script22();
        break;
      case "6dtuRNdHqeA":
        Script23();
        break;
      case "68SIVaE9N3v":
        Script24();
        break;
      case "5wlmDz5U9Zi":
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
audio.volume = 0.1;
}

function Script7()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
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

