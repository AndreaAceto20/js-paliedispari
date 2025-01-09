function palindroma(parola1){
    var stringaTest = parola1.split('');
    var stringaReverse = stringaTest.reverse();
    var parolaReverse = stringaReverse.join('');
    // var parolaReverse = parola1.split('').reverse().join('');
    if(parola1 === parolaReverse){
        console.log("la parola è palindroma");
    }else{
        console.log("la parola non è palindroma");
    }
}

let parola1 = prompt("inserire parola")

reverseParola = palindroma(parola1);
