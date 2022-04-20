function arrayPlusArray(arr1, arr2) {
    var arr = arr1.concat(arr2);
    var sum = 0;
      for(let i = 0; i < arr.length; i++){
          sum += arr[i];
      }
    return sum;
   }

function arrayPlusArray2(arr1, arr2) {
    return arr1.concat(arr2).reduce((acc, cur) => acc + cur);
  }