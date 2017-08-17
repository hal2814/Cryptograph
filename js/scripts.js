//back end
function cryptograph(stringToSplit){
 array = stringToSplit.replace(/\W+/g, " ");
 array = array.replace(/\s/g, '');
 array = array.split("");
 alert(array);

}


//front end
$(document).ready(function(){
  $("#sentence").submit(function(event){
    event.preventDefault();
    var string = $("#userInput").val();
    //$("#romanNumeral").text(ifState(num));
    $("#crypto").text(cryptograph(string));
  });
});
