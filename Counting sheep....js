function countSheeps(arr) {
    var p = 0
    for(let i = 0; i <= arr.length; i++){
      if(arr[i]) p++
    }
    return p
  }

  function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
  }