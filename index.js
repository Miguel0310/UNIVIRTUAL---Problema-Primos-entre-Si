//Exercicio 1
function is_prime(a,b){
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


//Exercicio 2
function mdcRecursive(a, b) {
    if (b == 0) {
        return a;
    }
    return mdcRecursive(b, a % b);
}

//Implementação exemplo
if (mdcRecursive(4,6) == 1){
  console.log('Primos entre si')
}
else {
  console.log('Não são primos entre si')
}
