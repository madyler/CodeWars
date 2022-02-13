function countPositivesSumNegatives(n) {
  let a = []  
  if(n&&n.length>0){
     a.push(n.reduce((s,i)=>i>0?s=s+1:s,0))    
     a.push(n.reduce((s,i)=>i<=0?s+=i:s,0))  
  }
  return a;
}
