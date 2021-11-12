function persistence(num) {
    var i = 0 
    while(num>=10){
     var mul = 1    
     while(num > 0) {
          mul = mul * (num % 10);
          num = Math.floor(num / 10);
         }  
      num = mul
      i++
      }
    return i
  }