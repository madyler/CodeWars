function sameCase(a, b){
  let A = a.toUpperCase()
  let B = b.toUpperCase()
  let regexp = /^\p{L}$/u;
  
if(regexp.test(a)&&regexp.test(b)){
  if((A===a)===(B===b)){
    return 1
  }else{
    return 0
  }
} 
return -1 ;
}
