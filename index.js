function is_prime(a,b){
  let diferencaA = 0;
  if(a === b){
    console.log("Não são primos entre si");
    return false
  }else{
    let maior;
    if (a > b) maior = a;
    else maior = b;
    console.log(maior);

    for (let i=2;i<=maior;i++){
      if (a%i === 0 && b %i === 0) {
        console.log("Não são primos entre si");
        return false;
        }
    } 
    console.log("São primos entre si");
  }
}
is_prime(5,10);
  
}