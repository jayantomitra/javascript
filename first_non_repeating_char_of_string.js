function first_non_repeating_char_of_string(input_string){
  
  var inputstring = String(input_string);
  var i = 0;
  var j = 0;
  var loop_out = false;
  for ( i = 0  ; i < inputstring.length; i++){
    var window = inputstring.slice(i,i+1);
    console.log("window " + window);
    for(j = i+1; j < inputstring.length ; j++){
      var char = inputstring.slice(j, j+1);
      //console.log(char)
      if(char === window){
      console.log(char + " repeats with " + char);
      loop_out = true;
      }
      else
        {
        loop_out = false;  
        }
      if(loop_out == true){
      console.log("looping out now for char  " + char);
      break;
        }
    }

    if (loop_out == false){
      console.log(window + " does not repeat");
      break;
       }
    }
  }




// driver code
first_non_repeating_char_of_string("srsartsy");
