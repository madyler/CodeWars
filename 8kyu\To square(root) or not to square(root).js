 function squareOrSquareRoot(array) {
     return array.map(m=>Number.isInteger(Math.sqrt(m)) ? Math.sqrt(m) : m * m )
 }
