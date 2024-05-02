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

// creo pulsante avvia gioco
// modalita easy
let avvioEz = document.getElementById(`avvioEz`);

avvioEz.addEventListener(`click`, function(){
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
    if(punteggio == 100 - 16){
        alert(`HAI VINTO`)
    }

})


// modalita medium
let avvioMd = document.getElementById(`avvioMd`)

avvioMd.addEventListener(`click`, function(){
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
    if(punteggio == 81 - 16){
        alert(`HAI VINTO`)
    }
})


// modalita hard
let avvioHs = document.getElementById(`avvioHd`)

avvioHd.addEventListener(`click`, function(){
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
    if(punteggio == 49 - 16){
        alert(`HAI VINTO`)
    }
})