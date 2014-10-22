var ROW =" ";
var MESSAGE="\n";
var pyramid=function(n){
for(var i=0;i<n;i++){
  ROW+="SFC ";
  MESSAGE+=ROW+"\n";
}
}
pyramid(5);
console.log(MESSAGE);