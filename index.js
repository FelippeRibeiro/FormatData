
function format(){
  var data = document.getElementById("data").value;
  var resultData = document.getElementById("data");
  var result = document.getElementById("result");

    if(data.length == 11){
      resultData.value = data.substring(0,3)+"."+data.substring(3,6)+"."+data.substring(6,9)+"-"+data.substring(9,11);
      result.innerHTML = data.substring(0,3)+"."+data.substring(3,6)+"."+data.substring(6,9)+"-"+data.substring(9,11);
    console.log(data.substring(0,3)+"."+data.substring(3,6)+"."+data.substring(6,9)+"-"+data.substring(9,11));
    } 
    else if(data.length == 14 ){
      if(data.substring(8,11) == "000" ){
        resultData.value = `${data.substring(0,2)}.${data.substring(2,5)}.${data.substring(5,8)}/${data.substring(8,12)}-${data.substring(12,14)}`;
        result.innerHTML = `${data.substring(0,2)}.${data.substring(2,5)}.${data.substring(5,8)}/${data.substring(8,12)}-${data.substring(12,14)}`;
       
      } else{
      data.replace(".","").replace(".","").replace("-",""); data.replace(".","").replace(".","").replace("-","");
        result.innerHTML = data.replace(".","").replace(".","").replace("-","");
        resultData.value = data.replace(".","").replace(".","").replace("-","");
      }
    } 
    //else if(data.length == 14 && data.substring(8,11) == "000" ){ 
    
    else if (data.length == 18){
    resultData.value = data.replace(".",'').replace(".","").replace("/","").replace("-","");
      result.innerHTML = data.replace(".",'').replace(".","").replace("/","").replace("-","");
    } 
   
     else {
      result.innerHTML = data.toLowerCase();
      resultData.value = data.toLowerCase();
     console.log(document.getElementById("result").value)
    }
  


  }

 function copy(){
  var result = document.getElementById("data");
  result.select();
  navigator.clipboard.writeText(result.value);
 }








