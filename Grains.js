function square(n){
    var c = 1
      while(n>0){
        if(n>1){
         c += c
        } 
        n--
      }
      return c
    }

function square(n){
    return Math.pow(2,n-1)
  }