function random(){
    var randNum = Math.floor(Math.random()*5 + 1)
    console.log(randNum);
    
    return randNum;
}
function sum(num1, num2){
    var somma = num1 + num2
    var verifica = false;
    console.log(somma);
    
    if(somma % 2 === 0){
        verifica = true;
    }
    return verifica;
}

let numeroUser = parseInt(prompt("inserire un numero da 1 a 5"));
if(numeroUser > 5){
    numeroUser = parseInt(prompt("il numero scelto è maggiore di 5, per favore inserire un numero da 1 a 5"));
}else if(numeroUser < 1){
    numeroUser = parseInt(prompt("il numero scelto è minore di 1, per favore inserire un numero da 1 a 5"));
}


let scelta = prompt("La somma del numero scelto + un numero casuale (nello stesso range) sarà pari o dispari?");
if(scelta != "pari" & scelta != "dispari"){
     scelta = prompt('Non è stata inserita ne la parola "pari" ne la parola "dispari", per favore inserire una delle due');
}
console.log(numeroUser);

let numeroPc = random();

let somma = sum(numeroPc, numeroUser);

if (somma & scelta === "pari"){
    console.log("la somma dei numeri è pari, hai vinto!!");
}else if (somma & scelta === "dispari"){
    console.log("la somma dei numeri è pari, hai perso!!");
}else if(!somma & scelta === "dispari"){
    console.log("la somma dei numeri è dispari, hai vinto!!");
}else{
    console.log("la somma dei numeri è dispari, hai perso!!");    
}
 