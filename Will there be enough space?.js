function enough(cap, on, wait) {
    return cap >= on + wait ? 0 : on + wait - cap 
   }

   function enough(cap, on, wait) {
    return Math.max(wait + on - cap, 0);
  }