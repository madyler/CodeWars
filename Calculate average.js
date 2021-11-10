function find_average(array) {
  // your code here
  return array.length > 0 ? array.reduce((sum, cur) => {return sum+cur})/array.length
  : 0;
}