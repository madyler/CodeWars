function rentalCarCost(d) {
    if(7<=d){
      return d*40-50
    }else if(3<=d && d<7){
      return d*40-20
    }else{
      return d*40
    }
  }

  const rentalCarCost = d => d * 40 - ((d > 6) ? 50 : ((d > 2) ? 20 : 0));