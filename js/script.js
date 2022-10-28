/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma.

Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.

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

// Make PC number

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

const eleFormVS = document.querySelector("#even-form");
const eleUserOption = document.querySelector("#userValue");
const eleUserNumber = document.querySelector("#UserNumbers");

eleFormVS.addEventListener('submit',

    function(eventVS) {
        eventVS.preventDefault();

        const min = 1;
        const max = 5;
        const skynetNumber = getRandomIntInclusive(min, max);

        console.log(skynetNumber);

    }

);
