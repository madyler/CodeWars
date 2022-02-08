function countSmileys(a) {
    var s = 0
    for(let i = 0; i<a.length; i++){
      for(let j = 0; j<a[i].length; j++){
        if(a[i][j]==';'||a[i][j]==':'){
          if(a[i][j+1]==")"||a[i][j+1]=='D'){
            s++
          }else if(a[i][j+1]=="-"||a[i][j+1]=='~'){
            if(a[i][j+2]==")"||a[i][j+2]=='D'){
              s++
            }
          }
        }
      }
    }
    return s
}



function countSmileys(arr) {
    return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
  }