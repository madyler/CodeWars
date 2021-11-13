function doubleChar(str) {
    var a = ""
   for(let i = 0; i<str.length; i++){
     a += str.slice(i,i+1) + str.slice(i,i+1)
   }
     return a
    }

function doubleChar(str) {
    var word = '';
    for (var i = 0; i < str.length; i++){
      word = word + str[i] + str[i];
    };
    return word;
  };