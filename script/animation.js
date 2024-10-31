// JS!
// dobbiamo applicare la classe "animated" al nostro box-crazy alla pressione del pulsante "GO!"

// RIFERIMENTO AL BOX-CRAZY
// document.querySelector('.box-crazy')
// document.getElementsByClassName('box-crazy')[0]
const crazyDiv = document.querySelector('.flex-container > div.box-crazy')

// RIFERIMENTO AL BOTTONE GO!
// document.getElementsByTagName('button')[0]
// document.querySelector('.flex-container > button')
const goButton = document.getElementById('start')

// AGGIUNGIAMO UN EVENT LISTENER AL CLICK SUL BOTTONE
goButton.addEventListener('click', (e) => {
  // AGGIUNGO LA CLASSE "animated" AL CRAZYDIV
  crazyDiv.classList.toggle('animated')
  // toggle AGGIUNGE "animated" se non c'è, e lo TOGLIE se c'è già!

  // MODIFICHIAMO L'ETICHETTA DEL BOTTONE
  if (goButton.innerText === 'GO!') {
    goButton.innerText = 'STOP'
  } else {
    goButton.innerText = 'GO!'
  }
})
