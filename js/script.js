// Consegna:
// 1. chiedi all'utente il cognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'
// 3. stampa la lista ordinata alfabeticamente
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
// Consigli del giorno:
// Consultiamo la documentazione W3Schools o MDN per trovare i metodi javascript che possono esserci utili.


// inserisci cognome
var cognome;
cognome = prompt("Inserisci qui il tuo cognome");
console.log(cognome);
// array
var data = ["rossi", "neri", "verdi", "bianchi", "gialli"];
console.log(data);
// pushare il cognome
data.push(cognome);
console.log(data);
// ordinare alfabeticamente
data.sort();
console.log(data);
// posizione umana della lista
for (var i = 0; i < data.length; i++) {
    console.log((i + 1)  + " " + data[i]);
}




