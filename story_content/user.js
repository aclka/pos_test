function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6LUmmjSa088":
        Script1();
        break;
      case "6LiUqu4XSkf":
        Script2();
        break;
      case "6SgwVLpGGWe":
        Script3();
        break;
      case "6EpbMJk59Uc":
        Script4();
        break;
      case "5XNXzixCXN1":
        Script5();
        break;
      case "6VUeTNzvWm7":
        Script6();
        break;
      case "6nPwfSFP26Q":
        Script7();
        break;
      case "5g25miXR7Um":
        Script8();
        break;
      case "5lGjyK46soq":
        Script9();
        break;
      case "5utNZ3ASl40":
        Script10();
        break;
      case "6OvStg0N1kH":
        Script11();
        break;
      case "6hnrxO8oNrm":
        Script12();
        break;
      case "5VrobeuqrU0":
        Script13();
        break;
      case "6J2krr44ieS":
        Script14();
        break;
      case "5dfwIRwUS6Y":
        Script15();
        break;
      case "6PAA5fEUVOR":
        Script16();
        break;
      case "5sZIXc8AfSk":
        Script17();
        break;
      case "5xsXTOQbWgC":
        Script18();
        break;
      case "6LuWMEEV3FU":
        Script19();
        break;
      case "5YbhPxEhEq0":
        Script20();
        break;
      case "6T1jL4NyrXB":
        Script21();
        break;
      case "6EfdyddLtvD":
        Script22();
        break;
      case "5whrbn8IPju":
        Script23();
        break;
      case "6clzAWyzYMC":
        Script24();
        break;
      case "61S7YpVO0v3":
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

