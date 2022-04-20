function mergeArrays(a, b) {
    var c = []
    for(let i = 0; i<a.length || i<b.length; i++){
      a[i] && c.push(a[i])
      b[i] && c.push(b[i])
    }
    return c
  }