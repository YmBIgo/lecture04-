var ROW =" ";
var MESSAGE="\n";
var counter = 0;
var blank;
var counter2;
var x;//差
var centeringSfcPyramid=function(n){
for(var i=0;i<n;i++){
  x=n-i;
  counter =0;
  blank="";
  counter2=0;
  counter = x*2;//５列のピラミッドの１列目なら８
  //空白を作る
  while(counter2<counter){
    blank+=" ";
    counter2++;
  }
  ROW+="SFC ";
  MESSAGE+=blank+ROW+"\n";
}
}
centeringSfcPyramid(5);
console.log(MESSAGE);
