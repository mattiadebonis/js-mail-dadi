//genera numero giocatore e computer
var numeroGiocatore = Math.floor(Math.random() * 6) + 1  

var numeroComputer = Math.floor(Math.random() * 6) + 1  

//variabile booleana vittoria giocatore
var vittoriaGiocatore = false
var pareggio = false

//variabile booleana pareggio

if (numeroGiocatore > numeroComputer){
    vittoriaGiocatore = true;
}else if (numeroGiocatore == numeroComputer){
    pareggio = true
}

// se numero giocatore è maggiore numero computer true

if (vittoriaGiocatore == true){
    document.getElementById("esito").innerHTML = "Ha vinto il giocatore"
}else if (pareggio == true){
    document.getElementById("esito").innerHTML = "Pareggio"
}else{
    document.getElementById("esito").innerHTML = "Ha vinto il computer"
}