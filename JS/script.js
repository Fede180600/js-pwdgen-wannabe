// Chiedere all'utente il suo nome, cognome, colore preferito; generare una password corrispondente a: nome+cognome+colorePreferito+21 stampare a schermo la password generata

// Chiedi il nome all'utente e salvalo nella variabile
const userName = prompt('Come ti chiami?')
console.log(userName);
// Chiedi il cognome all'utente e salavalo nella variabile
const userLastName = prompt('Qual è il tuo cognome?')
console.log(userLastName);
// Chiedi il colore preferito all'utente e salvalo nella variabile
const userFavoriteColor = prompt('Qual è il tuo colore preferito?')
console.log(userFavoriteColor);
// Genera la password
const password = userName + userLastName + userFavoriteColor + '21'
console.log(password);

// Mostra la password generata sul monitor
document.getElementById('my-title').innerHTML = password