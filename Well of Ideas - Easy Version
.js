function well(x){
  let j = 0
 for(let i=0; i<x.length; i++){
   if(x[i]=='good')j++
 }
 return j>2?'I smell a series!':j==0?'Fail!':'Publish!'
}
