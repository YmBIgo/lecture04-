var ROW =" ";
var MESSAGE="\n";
var RandomNumber;
var RandomInteger;
var randomSFCPyramid=function(n){
for(var i=0;i<n;i++){
  ROW+="SFC ";
  MESSAGE+=ROW+"\n";
}
}
RandomNumber = Math.random()*100;
RandomInteger = Math.floor(RandomNumber);
randomSFCPyramid(RandomInteger);
console.log(RandomInteger);
console.log(MESSAGE);