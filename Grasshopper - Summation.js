var summation = function (num) {
    var s = 0;
      for(let i=1;i<=num;i++){
       s+=i;
      }
      return s;
    }

function summation2(num) {
    return num * (num + 1) / 2
  }