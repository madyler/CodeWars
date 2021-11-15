function betterThanAverage(arr, n) {
    return arr.reduce((s, i) => s + i)/arr.length<n
  }
  