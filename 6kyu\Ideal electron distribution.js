function atomicNumber(e){
    const a=[]
    let n=1
    let j=0
    for(let i=0; i<e; i++){
      if(j<2*n*n){
        j++
      }else{
        a.push(j)
        n++
        j=1
      }    
    }
    if(j)a.push(j)
    return a
  }


  atomicNumber=(a,b=[],c=1,d=2*c**2)=>a?a<d?[...b,a]:atomicNumber(a-d,[...b,d],++c):b


  function atomicNumber(num) {
    var c = 1, res = Array();
    while (num > c * c * 2) {
      res.push(c * c * 2);
      num -= c * c * 2;
      c++;
    }
    res.push(num);
    return res;
  }