function twiceAsOld(dad, son) {
    let d = dad
    let s = son
    while(s > 0){
      if(d == s*2){
        return dad - d
      }
      d--
      s--
    }
     d = dad
     s = son
     while(d !== s*2){
      d++
      s++
    }
     return d - dad
     
   }


function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }