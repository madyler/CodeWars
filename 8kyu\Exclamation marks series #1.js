function remove(s){
  return s[s.length - 1] === '!' ? s.slice(0, -1) : s;
}