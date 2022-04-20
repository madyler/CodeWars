function tribonacci(a,n){
    if(a[0]>=0&&a[1]>=0&&a[2]>=0){
      for(let i=0; i<n; i++){
        a.push(a[i]+a[i+1]+a[i+2])
      }
    }
      return a.slice(0,n)
    }