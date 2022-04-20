function solution(l){
    var a =""
    for(let i=0; i<l.length; i++){
      if(l[i]==l[i+1]-1){
        let b =l[i]
        while(l[i]==l[i+1]-1&&i<l.length)i++
        if(b!==l[i]-1){
          a+=b+'-'+l[i]+','
          b =''
        }else{
          i--
          a+=l[i]+','
        }
      }else a+=l[i]+','
    }
     return a[a.length-1]==","?a.slice(0,a.length-1):a
   }


   function solution(list){
    for(var i = 0; i < list.length; i++){
       var j = i;
       while(list[j] - list[j+1] == -1) j++;
       if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
   }
   return list.join();
 }