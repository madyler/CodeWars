function array(arr){
    //Good luck
    let s = arr.split(",") 
    s.shift()
    s.pop() 
    if(s.length>=1){   
    return s.join(" ").replace(/,/g , " ")
    }
     return null 
    }

    function array(arr){
        return arr.split(",").slice(1,-1).join(" ") || null;
      }