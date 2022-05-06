window.addEventListener('load', function() {
var input = document.getElementById("input");
input.addEventListener('keyup', function onEvent(e) {
    if (e.keyCode === 13) {
        go()
    }
});
})

function go() {
  var url = document.getElementById("input").value
  if (url !== "") {
  window.location.href = "/service/gateway?url=" + url
  }
}

document.addEventListener('contextmenu', event => event.preventDefault());

document.onkeydown = function(e) {
  if(event.keyCode == 123) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
     return false;
  }
  if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
     return false;
  }
}

