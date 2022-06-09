
function first_repeating_char_of_string(input_string){
  
  var inputstring = String(input_string);
  var i = 0;
  var j = 0;
  var breaker = false;
  for ( i = 0  ; i < inputstring.length; i++){
    var window = inputstring.slice(i,i+1);
    console.log(window);
    for(j = i+1; j < inputstring.length ; j++){
      var char = inputstring.slice(j, j+1);
      if(char === window){
      breaker = true;
      } 
   
    }
     if(breaker == true){
    console.log("First repeating character of the given string is = " + window);
    break;
  }

}

}

// driver code
first_repeating_char_of_string("himalaya");
