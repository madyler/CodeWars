function spinWords(s){
    return s.split(' ').map(e=>e.length>=5?e.split('').reverse().join(''):e).join(' ')
  }