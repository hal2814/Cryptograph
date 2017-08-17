//back end
function cryptograph(stringToSplit){
  var array = stringToSplit.replace(/\W+/g, " ");
  array = array.replace(/\s/g, '');
  array = array.split("");

  var col = Math.floor(Math.sqrt(array.length))
  alert(col);
  var arraySize = array.length;
  var crypArray = [];
  var indexUpdate = -1;
  var count = 0;
  alert(arraySize)

  // for (var i = 0; i<col; ++i){
  //   for (var i = 0; i<array.length; ++i){
  //     if(count % col === 0){
  //       crypArray.push(array[i])
  //       count += 1;
  //     }else{
  //       count += 1;
  //     }



  for (var i = 0; i<array.length; ++i){
    if(count % col === 0){
      crypArray.push(array[i]);
      count += 1;
    }else{
      count +=1;
    };
    if(count === array.length-1){
      indexUpdate += 1;
      if(!(indexUpdate === col)){
        i = indexUpdate;
        count = 0;
      }
    }
  }
  return crypArray;
};


//front end
$(document).ready(function(){
  $("#sentence").submit(function(event){
    event.preventDefault();
    var string = $("#userInput").val();
    //$("#romanNumeral").text(ifState(num));
    $("#crypto").text(cryptograph(string));
  });
});
