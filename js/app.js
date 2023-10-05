// # How much does my ticket cost? -FORM-

// Il programma dovrà collezionare tramite input i dati forniti dall' utente: nome e cognome, Km da percorrere e fascia d'età.
const submitDOMElement = document.getElementById('generate-ticket');

const clearDOMElement = document.getElementById('clear-form');

let userNameDOMElement = document.getElementById('user-name');

let totalKmDOMElement = document.getElementById('total-km');

const ageDOMElement = document.getElementById('user-age');

let userDOMElement = document.getElementById('user');

let priceDOMElement = document.getElementById('price');

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - prezzo biglietto 0.21€ / Km
const basePrice = 0.21;

// va applicato uno sconto del 20% per i minorenni

// - prezzo del biglietto \* 0.2

// va applicato uno sconto del 40% per gli over 65.

// - prezzo del biglietto \* 0.4

// L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
// Questo richiederà un minimo di ricerca.
submitDOMElement.addEventListener('click', function () {
  // - collezionare il nome e cognome e salvarlo in una costante.
  const userName = userNameDOMElement.value;

  // - collezionare il numero di Km e salvarlo in una costante.
  const km = totalKmDOMElement.value;

  // - collezionare il valore di fascia d'età e salvarlo in una costante.
  const age = parseFloat(ageDOMElement.value);

  // - prezzo biglietto
  const ticketPrice = parseFloat(km) * basePrice * age;

  console.log(userName.lenght);
  console.log(
    `Ciao ${userName}, il prezzo del tuo biglietto è: ${ticketPrice.toFixed(2)}`
  );
  // BONUS
  console.log(km.lenght);
  if (km <= 0 || userName == 0) {
    alert('errore, compila i campi correttamente!');
  } else {
    userDOMElement.innerHTML = `${userName}`;
    priceDOMElement.innerHTML = `${ticketPrice.toFixed(2)} €`;
  }
});

clearDOMElement.addEventListener('click', function () {
  userNameDOMElement.value = ' ';
  totalKmDOMElement.value = ' ';
  userDOMElement.innerHTML = ' ';
  priceDOMElement.innerHTML = ' ';
});
