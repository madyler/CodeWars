
function howMuchILoveYou(nbPetals) {
    switch(nbPetals % 6){
        case 1:
        return "I love you"
        break
        case 2:
        return "a little"
        break
        case 3:
        return "a lot"
        case 4:
        return "passionately"
        break
        case 5:
        return "madly"
        break
        case 0:
        return "not at all"
    }
  }

  const howMuchILoveYou2=n=>['not at all','I love you','a little','a lot','passionately','madly'][n%6]