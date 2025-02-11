/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 */
let n1 = 8
let n2 = 10

if (n1 < n2) {
  console.log("n1 è più grande di n2")
} else {
  console.log("n2 è più grande di n1")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let number1 = 5
let number2 = 7

if (number1 === number2) {
  console.log("uguali")
} else {
  console.log("not equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let num1 = 15
let num2 = 5

if (num2 % num1) {
  console.log("è perfettamente divisibile per 5")
} else {
  console.log("non è divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let primoNum = 8
let secondNum = 16

console.log(primoNum)
console.log(secondNum - primoNum)

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 40
let shipping = 10

if (totalShoppingCart > 50) {
  console.log("spedizione gratuita")
} else {
  console.log("spedizione a pagamento")
}

let totalAmount = totalShoppingCart + shipping
console.log(totalAmount)

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let percentualeSconto = 20
let sconto = (totalShoppingCart * percentualeSconto) / 100

console.log(sconto) // sconto di 8 euro

let totalAmountBlackFriday = totalShoppingCart - sconto + shipping
console.log(totalAmountBlackFriday) // 42 euro

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let nu1 = 6
let nu2 = 4
let nu3 = 2

if (nu3 < nu2 < nu1) {
  console.log("6, 4, 2")
} else {
  console.log("non in ordine")
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log(typeof 37) //number
console.log(typeof "ciao") // string

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let x = 12

if (x === 11) {
  console.log("è dispari")
} else {
  console.log("è pari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */
let val = 7

if (val < 10) {
  console.log("Meno di 10")
} else if (val > 5) {
  console.log("più di 5")
} else {
  console.log("Uguale a 10 o maggiore")
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
}

me.city = "Toronto"

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop()
console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* Array vuoto:
const newList [
] */

const newList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(newList)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

newList[9] = 100
