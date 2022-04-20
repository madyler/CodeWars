function points(g) {
  let n = 0
  for(let i=0; i<10; i++){
    if(Number(g[i][0])>Number(g[i][2]))n = n + 3
    if(Number(g[i][0])==Number(g[i][2]))n = n + 1
  }
  return n
}