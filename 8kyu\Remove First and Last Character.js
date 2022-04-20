function removeChar(str){
    //You got this!
   let s = str.split('');
   s.shift();
   s.pop();
     return s.join('');
   };
   
   function removeChar2(str) {
    return str.slice(1, -1);
  }   