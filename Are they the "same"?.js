function comp(a1, a2){
    if(a1&&a2){
     for(let i=0; i<a1.length; i++){
       let j=0
       while(j<a2.length&&a1[i]**2!==a2[j]){
         j++
         }
       if(a1[i]**2==a2[j])delete a2[j]
       }
   return !a2.filter(Number).length
   }
   return false
   }


   function comp(array1, array2) {
    if(array1 == null || array2 == null) return false;
    array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
    return array1.map(v => v * v).every((v, i) => v == array2[i]);
  }