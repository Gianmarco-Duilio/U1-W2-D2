/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 100;
const num2 = 250;
if (num1 > num2) {
  console.log("100 è maggiore di 250");
} else num1 < num2;
{
  console.log("250 è maggiore di 100");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = 7;
if (num3 !== 5) {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num4 = 50;

if (num4 % 5 === 0) {
  console.log(" 50 divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num5 = 3;
const num6 = 7;
if (num5 === 8) {
  console.log("num5 è 8");
} else if (num6 === 8) {
  console.log("num6 è 8");
} else if (num5 + num6 === 8) {
  console.log("la somma di num5 e num6 è 8");
} else if (num5 - num6 === 8 || num6 - num5 === 8) {
  console.log("la sottrazione tra i due valori è 8");
} else {
  console.log("nessuna condizione si è verificata");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart = 47;
const promo = 50;
const ship = 10;
if (totalShoppingCart > promo) {
  console.log("checkout con spedizione gratuita =", totalShoppingCart);
} else {
  console.log("checkout con spedizione a pagamento =", totalShoppingCart + ship);
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const totalShoppingCart2 = 47;
const promo2 = 50;
const ship2 = 10;
const blackFriday = (totalShoppingCart2 / 100) * 20;

if (totalShoppingCart2 - blackFriday > promo) {
  console.log("checkout con spedizione gratuita =", blackFriday);
} else {
  console.log("checkout con spedizione a pagamento =", totalShoppingCart2 - blackFriday + ship);
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const n1 = 20;
const n2 = 10;
const n3 = 30;

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
const verNumero = 10;
if (typeof verNumero === "number") {
  console.log("la costante è un numero");
} else {
  console.log("la costante non è un numero");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const numero = 28;
if (numero % 2 !== 0) {
  console.log("dispari");
} else {
  numero % 2 === 0;
  console.log("pari");
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills[2];
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [];

numeri.push([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(numeri);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
numeri[9] = 100;
console.log(numeri);
