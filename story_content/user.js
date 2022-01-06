function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5vFJgqsDMcF":
        Script1();
        break;
      case "6Luj6tbrtxZ":
        Script2();
        break;
      case "6dpn41cYpOk":
        Script3();
        break;
      case "6MoGXOKlR1f":
        Script4();
        break;
      case "6AhnCMK9nWb":
        Script5();
        break;
      case "6BevRQjJBDN":
        Script6();
        break;
      case "5qs1Ja1e1NN":
        Script7();
        break;
      case "5bg5M0eCL2O":
        Script8();
        break;
      case "6Xyno7aqKTH":
        Script9();
        break;
      case "5ptK5JTeAST":
        Script10();
        break;
      case "6jxcc1HU0yH":
        Script11();
        break;
      case "6CHJo31hPg4":
        Script12();
        break;
      case "5XfAWcFKzJk":
        Script13();
        break;
      case "68vcVQeVx8m":
        Script14();
        break;
      case "6MxiRl6Lkug":
        Script15();
        break;
      case "6gEWeFPz9jv":
        Script16();
        break;
      case "6G1j5vFDX57":
        Script17();
        break;
      case "5t3ZgL0rY5N":
        Script18();
        break;
      case "6HisbNzxef7":
        Script19();
        break;
      case "5ebKPexOBR2":
        Script20();
        break;
      case "6m206kCuMRq":
        Script21();
        break;
      case "60SRtlHWRjT":
        Script22();
        break;
      case "5jiKeZkbQQc":
        Script23();
        break;
      case "5V5NvToQoqy":
        Script24();
        break;
      case "6XoLofHfN1x":
        Script25();
        break;
      case "5qyetpsJalr":
        Script26();
        break;
      case "607w12IL5nU":
        Script27();
        break;
      case "6D27GsyPCLE":
        Script28();
        break;
      case "6CXXMD7qUBu":
        Script29();
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
audio.volume = 0.0;
}

function Script11()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
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

function Script26()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script27()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script28()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script29()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

