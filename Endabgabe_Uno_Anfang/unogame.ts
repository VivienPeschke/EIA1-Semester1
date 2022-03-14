window.addEventListener("load", function (): void {
  //Implementierung der Karten, unterteilt in Farbe und Wert
  let colors: string[] = ['cyan', 'forest', 'pink', 'purp'];
  let values: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
  //freies Array um die implementierten Karten dort zu speichern (Deck/ Ziehstapel)
  let allcards: string[] = [];

  //Karten werden dem Array hinzugefügt (Deck/ Ziehstapel)
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < values.length; j++) {
      allcards.push(colors[i] + '-' + values[j])

    }
  }
  //Zeigt an ob sich die Karten, abgesehen von den ausgeteilten Karten, im Array befinden (Deck/ Ziehstapel)
  console.log('allcards am Anfang', allcards);

  //mischt die Karten
  allcards = shuffle(allcards)
  //Funktion zum mischen der Karten
  function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  //Arrays für die eigenen Spielkarten und den Gegner, in diesem Falle den einfachen Computer
  let ownplayercards: string[] = [];
  let opponentcards: string[] = [];

  //Aus dem Array mit allen gemischten Karten werden die letzten 10 Karten auf Spieler und Computer aufgeteilt und
  //gleichzeitig aus dem Array mit allen Karten entfernt, damit wir keine doppelten Karten bekommen
  for (let i = 0; i < 5; i++) {
    let letztekarte: string = allcards.pop()
    ownplayercards.push(letztekarte)
    opponentcards.push(letztekarte)
  }

  //Nachdem 10 Karten aus dem Array mit allen Karten entfernt wurden, wird nun die letzte Karte vom gemischten Deck offen gelegt,
  //sodass der Spieler mit dem Spiel beginnen kann
  let openedcard: string = allcards.pop()

  //Konsole gibt aus, ob und welche Karten verteilt wurden
  console.log('allcards', allcards)
  console.log('ownplayercards', ownplayercards)
  console.log('opponentcards', opponentcards)
  console.log('openedcard', openedcard)

  //DOM Manipulation um auf die jeweiligen ID's und Klassen zuzugreifen um diese zu beeinflussen
  let opponent: HTMLImageElement = document.querySelector('#opponent')
  let opencard: HTMLImageElement = document.querySelector('#open')
  let deck: HTMLImageElement = document.querySelector('.deck')
  let ownplayer: HTMLImageElement = document.querySelector('#ownplayer')

  //Funktion um die Karten in den DOM zu implementieren um Sie in der jeweiligen ID anzeigen zu lassen
  function showallcards(): void {
    //Offene Karte vom Ablagestapel in der HTML anzeigen
    opencard.innerHTML = '';
    let offeneKarteBild: HTMLImageElement = generatecardspng(openedcard)
    opencard.appendChild(offeneKarteBild)

    //Deck in der HTML anzeigen lassen, in diesem Falle nur die Rückseite der Karte
    deck.innerHTML = ''
    let stapelKarte: HTMLImageElement = generatecardspng('cardback')
    deck.appendChild(stapelKarte)

    //Spielerkarten in der HTML anzeigen lassen
    ownplayer.innerHTML = '';
    for (let i = 0; i < ownplayercards.length; i++) {
      let ownplayercard: HTMLImageElement = generatecardspng(ownplayercards[i])
      ownplayercard.className = 'karte'
      ownplayer.appendChild(ownplayercard)
      //Zum prüfen ob die Karte geklickt wurde, Ausgabe in der Konsole zur Kontrolle
      ownplayercard.addEventListener('click', function (): void {
        console.log(ownplayercards[i] + ' wurde geklickt')
        //Konsole gibt aus, ob die angeklickte Karte zur offenen Karte auf dem Ablagestapel passt oder nicht
        let cardtrue = querycardplayer(ownplayercards[i])
        console.log('Karte passt zu offener Karte: ' + cardtrue);
        //Wert oder Farbe passen zur offenen Karte auf dem Ablagestapel und kann somit abgelegt werden
        if (cardtrue === true) {
          openedcard = ownplayercards[i]
          console.log('offene Karte', openedcard)
          //passende Karte wird aus dem Array 'ownplayercards' entfernt
          ownplayercards.splice(i, 1)
          console.log('spielerkarten', ownplayercards);
          showallcards()
        }

      })
    }
    
    //Computer Karten werden als Rückseite in HTML angezeigt
    opponent.innerHTML = '';
    for (let i = 0; i < opponentcards.length; i++) {
      let opponentcard: HTMLImageElement = generatecardspng('cardback')
      opponent.className = 'karte'
      opponent.appendChild(opponentcard)
    }

  }

  //Funktion zum anzeigen aller Karten auf der Seite
  showallcards()

  //Funktion zum prüfen ob die Karte zur offenen Karte auf dem Ablagestapel passt (Wert oder Farbe)
  function querycardplayer(nameofcard: string): boolean {
    //Offene Karte und Spielerkarte werden getrennt in Farbe und Wert
    let openedcardsplit: string[] = openedcard.split('-')
    let givencardsplit: string[] = nameofcard.split('-')
    let colortrue = openedcardsplit[0] === givencardsplit[0]
    let valuetrue = openedcardsplit[1] === givencardsplit[1]
    //Wenn eine Bedingung erfüllt ist, wird die Karte zurück an die if Bedingung geschickt, welche es zulässt die Karte abzulegen
    let cardtrue = colortrue || valuetrue
    return cardtrue
  }

  //PNG-Image der Karten anzeigen lassen
  function generatecardspng(nameofcards: string): HTMLImageElement {
    let newcard: HTMLImageElement = new Image()
    newcard.className = 'karte'
    newcard.src = "Uno_Karten(2)/" + nameofcards + ".png"
    return newcard
  }


});