
var a;
var b;

console.log('test');

document.getElementById('submit').onclick = function () {
  a = parseInt(document.getElementById('a').value);
  b = parseInt(document.getElementById('b').value);

  if (a>b) {
    document.getElementById('comparison').innerHTML= ">";
  } 
  else if (a===b) {
    document.getElementById('comparison').innerHTML= "=";
  }
  else if (a<b) {
    document.getElementById('comparison').innerHTML= "<";
  }
}
