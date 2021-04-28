// array registrate
var mailRegistrate = ["michaelscott@dundermifflin.com", "dwightschrute@dundermifflin.com","pambeesly@dundermifflin.com","jimhalpert@dundermifflin.com","stanleyhudson@dundermifflin.com","phyllisvance@dundermifflin.com","oscarmartines@dundermifflin.com",]
//chiedere all'utente la mail
var mailUtente = prompt("Inserisci la tua mail")

//variabile booleana per mail presente inizializzata false
var mailPresente = false

//itera array mail registrate
for(var i=0; i < mailRegistrate.length; i++){
    console.log(mailRegistrate[i])
    
    // se mail array è uguale alla mail inserita variabile booleana allora true
    if (mailRegistrate[i] == mailUtente){
        mailPresente = true
        i=6//termina ciclo
    }
}

//restituisci risultato se vero allora messaggio positivo se falso messaggio negativo
if (mailPresente == true){
    document.getElementById("esito").innerHTML = "La mail è presente nell'archivio"
}else{
    document.getElementById("esito").innerHTML = "La mail è <strong>non</strong> presente nell'archivio"
}

