// creo funzione per quadrati
function creaQuad(numero){
    quadrato = document.createElement(`div`);
    quadrato.classList.add(`quadrato`)
    griglia.append(quadrato)
}

// creo funzione per eventlistener
function cliccati(elemento, numero, bombe){
    elemento.addEventListener(`click`, function () {
        if(bombe.includes(numero)){
            console.log(`hai cliccato sulla bomba ${numero}`)
            this.classList.toggle(`background-bomba`)
            alert(`Hai perso`)
            griglia.innerHTML = null
            punteggio = 0
            document.getElementById(`punteggio`).innerHTML = `Il tuo punteggio è: ${punteggio}`

        } else{
            console.log(`hai cliccato sul quadrato ${numero}`)
            this.classList.toggle(`background-safe`)
            console.log(punteggio += 1)
            document.getElementById(`punteggio`).innerHTML = `Il tuo punteggio è: ${punteggio}`
        }
        if(punteggio == numeroCelle - numeroBombe){
            vittoria = true;
            alert(`hai vinto`)
            griglia.innerHTML = null
            punteggio = 0
        }
    })
}



// // creo funzione per svuotare griglia
// function clearBox(elementID)
// {
//     document.getElementById(elementID).innerHTML = null;
// }

let griglia = document.getElementById(`griglia`);
let quadrato;
let punteggio = 0;
let numeroCelle;
let numeroBombe = 16;
let vittoria = false;

// creo pulsante avvia gioco
// modalita easy
let avvioEz = document.getElementById(`avvioEz`);

avvioEz.addEventListener(`click`, function(){
    numeroCelle = 100
    let bombe = Array.from({length: 16}, () => Math.floor(Math.random() * 100));
    console.log(bombe)
    if(griglia.innerHTML != null){
        griglia.innerHTML = null
    }
    griglia.style.width = `1000px`
    for (var i=0; i <= 99; i++) {
        let creazione = creaQuad(i);
        let aggClasse = cliccati(quadrato, i, bombe);
        
    }

})


// modalita medium
let avvioMd = document.getElementById(`avvioMd`)

avvioMd.addEventListener(`click`, function(){
    numeroCelle = 81
    let bombe = Array.from({length: 16}, () => Math.floor(Math.random() * 81));
    console.log(bombe)
    if(griglia.innerHTML != null){
        griglia.innerHTML = null
    }
    griglia.style.width = `900px` 
    for (let i=0; i <= 80; i++) {
        let creazione = creaQuad(i)
        let aggClasse = cliccati(quadrato, i, bombe)
    }
    
})


// modalita hard
let avvioHs = document.getElementById(`avvioHd`)

avvioHd.addEventListener(`click`, function(){
    numeroCelle = 49
    let bombe = Array.from({length: 16}, () => Math.floor(Math.random() * 49));
    console.log(bombe)
    if(griglia.innerHTML != null){
        griglia.innerHTML = null
    }
    griglia.style.width = `700px` 
    for (let i=0; i <= 48; i++) {
        let creazione = creaQuad(i)
        let aggClasse = cliccati(quadrato, i, bombe)
        
        
    }
    
    
})