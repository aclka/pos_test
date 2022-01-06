function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Mg9gOCMmfN":
        Script1();
        break;
      case "6J0LDYDfblC":
        Script2();
        break;
      case "6r7o6znJ6Ob":
        Script3();
        break;
      case "5WThqMg7Vov":
        Script4();
        break;
      case "6P12sd8Gf5T":
        Script5();
        break;
      case "5wDVwyo6Km9":
        Script6();
        break;
      case "6VWP5zvKohE":
        Script7();
        break;
      case "67pZIL4iQM3":
        Script8();
        break;
      case "6aRuAnFZTvZ":
        Script9();
        break;
      case "5b1JIyc9aWn":
        Script10();
        break;
      case "63gqTP17BWJ":
        Script11();
        break;
      case "6IqQJRmNCqj":
        Script12();
        break;
      case "6mUeuUILdvf":
        Script13();
        break;
      case "6Vb9uGv5Ddp":
        Script14();
        break;
      case "6GH8skK4wi3":
        Script15();
        break;
      case "6K3P0ZCSPVZ":
        Script16();
        break;
      case "67IfavE411l":
        Script17();
        break;
      case "6nEtCHJuomR":
        Script18();
        break;
      case "6KogrYdV8MW":
        Script19();
        break;
      case "6Ifn8rApHdX":
        Script20();
        break;
      case "67JmqboK0vi":
        Script21();
        break;
      case "6nHlyCA9Bwj":
        Script22();
        break;
      case "5nDsaIZlK33":
        Script23();
        break;
      case "6Zz0737xSgs":
        Script24();
        break;
      case "5ktaDKvQJKW":
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

