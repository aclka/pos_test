function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6943cP1FS47":
        Script1();
        break;
      case "6bkXWfyQP8x":
        Script2();
        break;
      case "5d321L7ukY6":
        Script3();
        break;
      case "6qDETTEAcQZ":
        Script4();
        break;
      case "69VnmkK1qBX":
        Script5();
        break;
      case "6TrkWvLJD7u":
        Script6();
        break;
      case "6inZ98K4bB6":
        Script7();
        break;
      case "6g52slIt26J":
        Script8();
        break;
      case "5hq4HSdkXto":
        Script9();
        break;
      case "5giqkiwHUCG":
        Script10();
        break;
      case "6cLhdZg2ZIZ":
        Script11();
        break;
      case "6Hxfo079qit":
        Script12();
        break;
      case "6mBZx01EzNY":
        Script13();
        break;
      case "5Vw7FUtF1ZD":
        Script14();
        break;
      case "6Fwz9oJ1ZzC":
        Script15();
        break;
      case "5lfOtTVZHr4":
        Script16();
        break;
      case "5sSUAAf404V":
        Script17();
        break;
      case "6f63Bub9fyt":
        Script18();
        break;
      case "5VgWyvXOSkn":
        Script19();
        break;
      case "5bpd2yYAvar":
        Script20();
        break;
      case "5Y2OAE2JCWe":
        Script21();
        break;
      case "6VIdGUcNb11":
        Script22();
        break;
      case "6mpEcvxB4WK":
        Script23();
        break;
      case "5fKcLcZMkYr":
        Script24();
        break;
      case "69FcU0MLceZ":
        Script25();
        break;
      case "6PmCu7VIcu7":
        Script26();
        break;
      case "6MVjD07f0cy":
        Script27();
        break;
      case "5XHimTQtLsQ":
        Script28();
        break;
      case "5fNGIRcKcBL":
        Script29();
        break;
      case "5eEKeXyBOOk":
        Script30();
        break;
      case "5jR1O6hpyEs":
        Script31();
        break;
      case "5vttYuz1ceJ":
        Script32();
        break;
      case "6puQdCEak1y":
        Script33();
        break;
      case "5b9Wm16e8Oa":
        Script34();
        break;
      case "6g3jHJfLMyA":
        Script35();
        break;
      case "6QhKMgiDG1z":
        Script36();
        break;
      case "5az051d6iYW":
        Script37();
        break;
      case "66SCRg5da3Q":
        Script38();
        break;
      case "6GPZ3EkgFfV":
        Script39();
        break;
      case "6G9BXeIwXcw":
        Script40();
        break;
      case "6LOAXJCNuWC":
        Script41();
        break;
      case "6iGYVsMPeIH":
        Script42();
        break;
      case "67fVxcMvcNv":
        Script43();
        break;
      case "676aUY3xAY7":
        Script44();
        break;
      case "65U7VGDUz5m":
        Script45();
        break;
      case "6abrX32f1cm":
        Script46();
        break;
      case "6L9fpeaRQAm":
        Script47();
        break;
      case "64RXUY2osM0":
        Script48();
        break;
      case "6Wun9Gjq4nP":
        Script49();
        break;
      case "6ceCI7yT1ur":
        Script50();
        break;
      case "6ZIzKno72YU":
        Script51();
        break;
      case "5haCtbyNfzn":
        Script52();
        break;
      case "5mAco8vUEnK":
        Script53();
        break;
      case "6We7LxPX4CH":
        Script54();
        break;
      case "5jFDLEohAXs":
        Script55();
        break;
      case "5ilfZL8cC0V":
        Script56();
        break;
      case "5hIciMVkO3j":
        Script57();
        break;
      case "5fFPUgS1HHl":
        Script58();
        break;
      case "6WEl3wp3hCR":
        Script59();
        break;
      case "6l5ZggIxJvQ":
        Script60();
        break;
      case "6rfiNdeoSLM":
        Script61();
        break;
      case "6AeulWbWOog":
        Script62();
        break;
      case "63wlbXPnDNe":
        Script63();
        break;
      case "6Kzn4UOrM4Y":
        Script64();
        break;
      case "64duSWck1Lc":
        Script65();
        break;
      case "6FtCHwLrlS4":
        Script66();
        break;
      case "61vUe25QpHD":
        Script67();
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
audio.volume = 0.0;
}

function Script23()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script24()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
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

function Script30()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script31()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script32()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script33()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script34()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script35()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script36()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script37()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script38()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script39()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script40()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script41()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script42()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script43()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script44()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script45()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script46()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script47()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script48()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script49()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script50()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script51()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script52()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script53()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script54()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script55()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script56()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script57()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script58()
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

function Script59()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script60()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script61()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script62()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script63()
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

function Script64()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.1;
}

function Script65()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

function Script66()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script67()
{
  var appState = window.DS ? DS.appState : require("helpers/appState");
appState.onToggleVolume();
}

