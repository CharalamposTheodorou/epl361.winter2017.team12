document.addEventListener("DOMContentLoaded", function(){
  const {dialog} = require('electron').remote;
  const fs = require("fs");
  String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
  };
  function isWindows() {
    return navigator.platform.indexOf('Win') > -1;
  }
  var date = new Date();
  document.querySelector(".year").innerHTML = date.getFullYear();
  document.querySelector(".drop-highlight").style.height = (window.innerHeight - document.querySelector(".footer").offsetHeight) + 1 + "px";
  document.querySelector(".m-load").style.left = (window.innerWidth / 2 - document.querySelector(".m-load").offsetWidth / 2) + 3 + "px";
  document.querySelector(".m-load").style.top = document.querySelector("#loader").offsetTop + 80 + "px";
  document.querySelector(".stop").style.left = (window.innerWidth / 2 - document.querySelector(".stop").offsetWidth / 2) + "px";

  // document.addEventListener('mouseout', function(e){
  //   document.querySelector(".drop-highlight").style.display = "none";
  // });
  // document.addEventListener('mouseup', function(e){
  //   document.querySelector(".drop-highlight").style.display = "none";
  // });

  //Style Button on mouseover / mouseout
  document.querySelector('.m-select').addEventListener('mouseover', function(e){
    document.querySelector('.m-select').style.color = "#FC0";
    document.querySelector('.m-select').style.fontWeight = "bolder";
  });
  document.querySelector('.m-select').addEventListener('mouseout', function(e){
    document.querySelector('.m-select').style.color = "white";
    document.querySelector('.m-select').style.fontWeight = "normal";
  });
  //Resize Update
  window.addEventListener('resize', function(e){
    document.querySelector(".drop-highlight").style.height = (window.innerHeight - document.querySelector(".footer").offsetHeight) + 1 + "px";
    document.querySelector(".m-load").style.left = (window.innerWidth / 2 - document.querySelector(".m-load").offsetWidth / 2) + 3 + "px";
    document.querySelector(".m-load").style.top = document.querySelector("#loader").offsetTop + 80 + "px";
    document.querySelector(".stop").style.left = (window.innerWidth / 2 - document.querySelector(".stop").offsetWidth / 2) + "px";
  });
});
