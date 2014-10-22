var ROW =" ";
var MESSAGE="\n";
var RandomNumber;
var RandomInteger;
var counter =0;
var pyramid=function(n){
for(var i=0;i<n;i++){
  ROW+="SFC ";
  MESSAGE+=ROW+"\n";
}
}
nRandomSFCPyramid = function(input){
  console.log("START");
  while(counter<input){
    counter++;
    RandomNumber = Math.random()*100;
RandomInteger = Math.floor(RandomNumber);
pyramid(RandomInteger);
console.log(RandomInteger);
console.log(MESSAGE);
  }
  console.log("FINISH");
}
nRandomSFCPyramid(3);
