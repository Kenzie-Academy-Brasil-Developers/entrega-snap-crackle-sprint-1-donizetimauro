function snapCrackle(maxValue){
    let retorno = []
    let i = 1;
    for (i; i <= maxValue; i++){
      if (i%2 == 1 & i%5 == 0){
        retorno.splice(maxValue, i, "snapCrackle");
      }else if (i%5==0){
        retorno.splice(maxValue, i, "crackle");
      }else if(i%2 == 1){
        retorno.splice(maxValue, i, "snap");
      }else{
        retorno.push(i)
      }
    }return retorno.join(', ')
  }
  console.log(snapCrackle())
  // função snapcrackle simples