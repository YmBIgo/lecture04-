var answer=0;
var yakubun =0;
var y_bunsi,y_bunbo=0;
function reduce(bunsi,bunbo){
  if(bunbo!=0&&bunsi!=0){
    yakubun = bunbo/bunsi;
  if(bunbo==1){
    answer=bunsi;
  }else if(bunsi==1){
    answer=bunsi+"/"+bunbo;
  }else{
    y_bunsi=bunsi/yakubun;
      y_bunbo=bunbo/yakubun;
    answer=y_bunsi+"/"+y_bunbo;
  }
  }else{
    answer=0;
  }
}
reduce(1,1);
console.log(answer);