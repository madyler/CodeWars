function validParentheses(p) {
    var s = 0
    if(p[0] == "("||p==""){
      for(let i=0; i<p.length; i++){
        if(s>=0)p[i]=="(" ? s++ : s--   
      }
      if(s == 0)return true
      }
    return false;
  }


  function validParentheses(parens){
    var n = 0;
    for (var i = 0; i < parens.length; i++) {
      if (parens[i] == '(') n++;
      if (parens[i] == ')') n--;
      if (n < 0) return false;
    }
    
    return n == 0;
  }