function generateShape(i){
    var n = ""
    let y = i
      while(y>0){
        let j = i
        while(j>0){
          n += "+"
          j--
        }
        if(y>1){n += "\n"}
        y--
      }
      return n
    }

    function generateShape(n){
        return ("+".repeat(n)+"\n").repeat(n).trim()
      }