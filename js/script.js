/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.

Consigli del giorno
1. Scriviamo sempre in italiano i passaggi che vogliamo fare
2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
Buon lavoro e buon divertimento! :slightly_smiling_face:
*/

/* Pseudo coding 

Palindroma
1. Creo la funzione reverseString (con il metodo del ciclo)
2. Creo l'eventListner 

*/

// Make reverse string

function reverseString(str) {
    
        let newString = "";
        for (let i = str.length -1; i>=0; i--){
            newString += str[i];
        }
        return newString;
}

// const string = prompt('Enter a string:');

// const result = reverseString(string);
// console.log(result)

// Make eventLIstner

const eleForm = document.querySelector("#palindrome-form");
const eleInputForm = document.querySelector("#input-word");
const eleResults = document.querySelector("#results");

eleForm.addEventListener('submit',

    function(event) {
        event.preventDefault();

        const string = document.querySelector("#input-word").value;
        const result = reverseString(string);
        //console.log(result);

        if (result === string) {
            eleResults.innerHTML += `<p>'Yes, it is palidrome'</p>`;
            //console.log('palindrome');
        } 

        else {
            eleResults.innerHTML += `<p>'No, it isn't palidrome'</p>`;
            //console.log('not palindrome');
        }

    }

);

// problema di accumulo dei p dentro il div

/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

Pseudo coding
1. Creaiamo la funzione random number (DONE)
2. Creiamo la funzione per il bottone (almost DONE)
    - L'utente seleziona i valori, quando preme il pulsante stama il risultato

    Dentro la funzione bottone
    - Selezionare i valori
    - Sommiamo i valori
    - Tramite una funzione determiniamo se la somma è pari o dispari
    - Dichiariamo chi ha vinto con un if else

*/

// Make PC number
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const min = 1;
const max = 5;

const eleFormEven = document.querySelector('#even-form');
const eleInputValue = document.querySelector('#userValue');
const eleInputNumbers = document.querySelector('#userNumbers');

eleFormEven.addEventListener('submit',

    function (event) {
        event.preventDefault();
        
        const inputValueEven = document.querySelector('#userValue').value;
        const inputValueNum = parseInt(document.querySelector('#userNumbers').value);

        const skynetNumber = getRandomIntInclusive(min, max);
        const Sum = skynetNumber + inputValueNum;
        
        console.log(inputValueEven);
        console.log(Sum);
        
    }


);