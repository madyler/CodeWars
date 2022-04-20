function updateLight(current){
    if (current=="green") {
      return "yellow"
    } else if (current=="red"){
        return "green"
    } else {
        return "red"
    }
  }


const updateLight = current => {
    return {
      red: 'green',
      yellow: 'red',
      green: 'yellow'
    }[current];
  }


function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
  }