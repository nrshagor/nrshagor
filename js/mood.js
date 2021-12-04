var toggled = false;
function myFunction(){
  if(!toggled){
    toggled = true;
    document.getElementById('page').setAttribute('href', './css/dark.css');
    document.getElementById('d').innerHTML = 'light';
    return;
  }
  if(toggled){
    toggled = false;
    document.getElementById('d').innerHTML = 'bal';
    document.getElementById('page').setAttribute('href', './css/style.css');
    return;
  }
}
function my() {
  var x = document.getElementById("d");
  if (x.innerHTML === "You can also saw a dark mood if you slide this button...") {
    x.innerHTML = "You can also saw a light mood if you slide this button...";
  } else {
    x.innerHTML = "You can also saw a dark mood if you slide this button...";
  }
}


var chk = false;
function myFunction(){
  if(!chk){
    chk = true;
    document.getElementById('page').setAttribute('href', './css/dark.css');
    return;
  }
  if(chk){
    chk = false;
    document.getElementById('page').setAttribute('href', './css/style.css');
    return;
}
}
