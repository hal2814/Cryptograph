//back end
function crpWord(array,col,index){
  var string="";
  for( var i = index;i < array.length; i += col){
    string = string + array[i];
  }
  return string;
};

function cryptograph(stringToSplit){
  var array = stringToSplit.replace(/\W+/g, " ");
  array = array.replace(/\s/g, '');
  array = array.split("");

  var col = Math.floor(Math.sqrt(array.length))
  var arraySize = array.length;
  var crypArray = [];
  var indexUpdate = 0;
  var count = 0;

  for(var i =0; i <col;++i){
    crypArray.push(crpWord(array,col,indexUpdate))
    indexUpdate +=1;
  };
  finalString = crypArray.join("");
  finalArray = finalString.split("");
  for(var j =0;j<finalArray.length;j+=6){
    finalArray.splice(j,0," ");
  }
  finalString = finalArray.join("");
  return finalString;
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
