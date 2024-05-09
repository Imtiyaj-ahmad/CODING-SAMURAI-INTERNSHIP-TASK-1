function Solve(val) {
   var v = document.getElementById('res');
   //storing data of result in variable v
   v.value += val;
   //sum up store value and val
}
function Result() {
   var num1 = document.getElementById('res').value;
   var num2 = eval(num1);
   document.getElementById('res').value = num2;
}
function Clear() {
   var inp = document.getElementById('res');
   inp.value = '';
}
function Back() {
   var ev = document.getElementById('res');
   ev.value = ev.value.slice(0,-1);
}
