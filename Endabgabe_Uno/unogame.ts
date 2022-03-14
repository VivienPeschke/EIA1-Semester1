window.addEventListener("load", function (): void {

  //Implementierung der Karten, unterteilt in Farbe und Wert
  let colors: string[] = ['cyan', 'forest', 'pink', 'purp'];
  let values: string[] = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
  //freies Array um die implementierten Karten dort zu speichern (Deck/ Ziehstapel)
  let deckcards: string[] = [];

  //Karten werden dem Array hinzugefügt (Deck/ Ziehstapel)
  for (let i = 0; i < colors.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deckcards.push(colors[i] + '-' + values[j])

    }
  }
  //Zeigt an ob sich die Karten, abgesehen von den ausgeteilten Karten, im Array befinden (Deck/ Ziehstapel)
  console.log('Alle Karten am Anfang', deckcards);

  //mischt die Karten
  deckcards = shuffle(deckcards)

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

  //Konsole zeigt an ob die Karten gemischt wurden (Kontrollpunkt - im weiteren Skript gekennzeichnet mit KP)
  console.log('Alle Karten wurden gemischt', deckcards);

  //Arrays für die eigenen Spielkarten, den einfachen Computer und den Ablagestapel für die offenen Karten
  let ownplayercards: string[] = [];
  let opponentcards: string[] = [];
  let openstackcards: string[] = [];

  //Aus dem Array mit allen gemischten Karten werden die letzten 10 Karten auf Spieler und Computer aufgeteilt und
  //gleichzeitig aus dem Array mit allen Karten entfernt, damit wir keine doppelten Karten bekommen
  for (let i = 0; i < 5; i++) {
    let lastcards: string = deckcards.pop()
    ownplayercards.push(lastcards)
  }

  for (let i = 0; i < 5; i++) {
    let lastcards: string = deckcards.pop()
    opponentcards.push(lastcards)
  }

  //Nachdem 10 Karten aus dem Array mit allen Karten entfernt wurden, wird nun die letzte Karte vom gemischten Deck
  //in ihr zugehöriges Array gepusht, damit wir später die Karten wieder neu mischen können 
  openstackcards.push(deckcards.pop());

  //Konsole gibt aus, ob und welche Karten an wen verteilt wurden, welche Karten zum ziehen vorhanden sind
  //und welche Karte im Moment Offen liegt (KP)
  console.log('allcards after shuffle and given', deckcards)
  console.log('playercards', ownplayercards)
  console.log('opponentcards', opponentcards)
  console.log('openedcard', openstackcards[0])

  //Karten werden beim ablegen immer in das Array "openstackcards" gepusht und aus der Hand/ dem Deck entfernt
  //Dies verhindert doppelte Karten im Spiel
  for (let i = 0; i < openstackcards.length; i++)
    console.log('openstackcards', openstackcards[i]);


  //DOM Manipulation um auf die jeweiligen ID's und Klassen zuzugreifen um diese zu beeinflussen
  let opponent: HTMLImageElement = document.querySelector('#opponent')
  let opencard: HTMLImageElement = document.querySelector('#open')
  let deck: HTMLImageElement = document.querySelector('.deck')
  let ownplayer: HTMLImageElement = document.querySelector('#ownplayer')

  //PNG-Image der Karten anzeigen lassen, Klassenzuweisung und als Variable "newcard" zurückgeben
  function generatecardspng(nameofcards: string): HTMLImageElement {
    let newcard: HTMLImageElement = new Image()
    newcard.className = 'karte'
    newcard.src = "Uno_Karten(2)/" + nameofcards + ".png"
    return newcard
  }

  //Funktion zum Anzeigen aller Karten im Spiel
  showallcards();

  //Funktion um die Karten in den DOM zu implementieren um Sie in der jeweiligen ID anzeigen zu lassen
  function showallcards(): void {

    //Offene Karte vom Ablagestapel in der HTML anzeigen, Klassenzuweisung und an Variable angehangen
    opencard.innerHTML = '';
    let openedcardpng: HTMLImageElement = generatecardspng(openstackcards[openstackcards.length - 1])
    openedcardpng.className = 'karte';
    opencard.appendChild(openedcardpng)

    //Deck in der HTML anzeigen lassen (in diesem Falle nur die Rückseite der Karte)
    //Klassenzuweisung und an Variable angehangen
    deck.innerHTML = ''
    let deckcard: HTMLImageElement = generatecardspng('cardback')
    deckcard.className = 'karte';
    deck.appendChild(deckcard);

    //Wenn man auf den Ziehstapel (im Spiel: Karten Stapel) klickt...
    deckcard.addEventListener('click', function (): void {

      //soll die Konsole ausgeben, welche Karte angeklickt wurde...
      console.log(deckcards[0] + ' wurde geklickt');

      //wenn die Länge des Kartenstapels größer als 0 ist...
      if (deckcards.length > 0) {
        console.log('Meine Karten nach einem Zug: ', ownplayercards);

        //darf eine Karte gezogen werden und dem jeweiligen Array zugewiesen werden
        ownplayercards.push(getDeckCard());

        //hiermit wird der Zug dem Gegner überlassen...
        opponentsTurn();

        //wenn der Ziehstapel aber leer ist (also die Bedingung nicht erfüllt wurde)
      } else {
        console.log('Karten wurden neu gemischt!');

        //sollen die Karten vom Ablagestapel (außer der Letzten bzw, offenen Karte) neu gemischt und
        //in den Ziehstapel gepackt werden
        reloadDeckCards();
      }
      showallcards();
    })

    //Funktion zum ziehen einer Karte
    function getDeckCard(): string {

      //wenn die Länge der Ziehkarten kleiner oder gleich 0 ist und die offenen Karten ebenfalls 
      //ungleich oder gleich 0 sind, können keine Karten gezogen werden
      if (deckcards.length <= 0 && openstackcards.length <= 0) {

        //Konsole gibt Info, dass keine Karten vorhanden sind
        console.log('Keine Karten zum ziehen vorhanden!');
      }
      //wenn jedoch die Länge der Ziehkarten kleiner oder gleich 0 ist und die offenen Karten
      //jedoch größer oder gleich 1 sind...
      else if (deckcards.length <= 0 && openstackcards.length >= 1) {

        //sollen die Karten durch diese Funktion neu gemischt und wieder im Deck platziert werden
        reloadDeckCards();
        return deckcards.shift();
      }
      else {
        return deckcards.shift();
      }
    }

    //Funktion zum neu mischen der Karten aus Ablagestapel und Ziehkarten
    function reloadDeckCards(): void {

      //wenn die Länge der offenen Karten größer als 1 ist...
      if (openstackcards.length > 1) {

        //sollen, bis auf die aktuell offen gelegte Karte, alle Karten neu gemischt und
        let cardsToShuffle: string[] = openstackcards.splice(0, openstackcards.length - 2);
        console.log('Diese Karten wurden gemischt ', cardsToShuffle);

        deckcards = shuffle(cardsToShuffle);

        //wieder dem Deck hinzugefügt werden
        deckcards.push(openstackcards.pop());

        //KP ob die Anweisungen ausgeführt wurden
        console.log('Diese Karten wurden gemischt ', cardsToShuffle);
        console.log('Karten wurden gemischt', deckcards);
      }
    }


    //Computer Karten werden als Rückseite (verdeckt) in der HTML angezeigt, bekommen eine Klasse und
    //werden über die ID "opponent" an die Variable "opponentcard" angehangen
    opponent.innerHTML = '';
    for (let i = 0; i < opponentcards.length; i++) {
      let opponentcard: HTMLImageElement = generatecardspng('cardback');
      opponent.className = 'karte';
      opponent.appendChild(opponentcard);

    }

    //Funktion für den Zug des Computers
    function opponentsTurn(): void {

      //Variablendeklarationen um diese in der Funktion als Bedingung an die if-else weiterzugeben
      let noCardsToPlaceInDeck: boolean = false;
      let turnDone: boolean = false;

      //Prüfe, ob eine Karte ablegbar ist oder nicht
      for (let i = 0; i < opponentcards.length; i++) {
        //Falls eine Karte ablegbar ist...
        if (querycardtrue(opponentcards[i]) && turnDone == false) {

          //Lege diese Karte ab...
          openstackcards.push(opponentcards[i]);

          //KP ob die Anweisung ausgeführt wurde
          console.log('PC abgelegte Karte: ', openstackcards[0]);

          //und entferne die Karte aus deinem Array
          opponentcards.splice(i, 1);

          //Zug mit dem Ablegen einer Karte beendet
          turnDone = true;
        }

        //Falls keine Karte ablegbar ist...
        if (turnDone == false && i == opponentcards.length - 1) {

          //Variable wird auf true gesetzt
          noCardsToPlaceInDeck = true;
        }
      }
      //Keine ablegbare Karte gefunden...
      if (noCardsToPlaceInDeck == true) {

        //Zieh eine Karte aus dem Ziehstapel (Deck)
        let cardToTake: string = getDeckCard();

        //KP ob die Anweisung ausgeführt wurde
        console.log('PC Karte gezogen: ', cardToTake);

        //Füge eine Karte dem Array von "opponentcards" hinzu
        opponentcards.push(cardToTake);
      }
      showallcards();

    }

    //Spielerkarten in der HTML anzeigen lassen, Klassenzuweisung und an Variable angehangen
    ownplayer.innerHTML = '';
    for (let i = 0; i < ownplayercards.length; i++) {
      let ownplayercard: HTMLImageElement = generatecardspng(ownplayercards[i]);
      ownplayercard.className = 'karte';
      ownplayer.appendChild(ownplayercard);

      //Variable als Übergabewert der Funktion "querycardtrue"
      let cardtrue = querycardtrue(ownplayercards[i]);

      //KP ob die richtige Karte angezeigt wird
      console.log('Offene Karte: ', openstackcards[openstackcards.length - 1]);

      //Beim Klick auf eine Handkarte passiert folgendes...
      ownplayercard.addEventListener('click', function (): void {

        //KP gibt aus ob und welche Karte angeklickt wurde
        console.log('Player clicked: ', ownplayercards[i]);
        
        //Wert oder Farbe passen zur offenen Karte auf dem Ablagestapel...
        if (cardtrue === true) {

          //und kann somit abgelegt werden...
          openstackcards.push(ownplayercards[i]);

          //KP ob die Karte abgelegt wurde
          console.log('Offene Karte nach Ablegen einer passenden Karte: ', openstackcards[openstackcards.length - 1]);

          //passende Karte wird aus dem Array "ownplayercards" entfernt
          ownplayercards.splice(i, 1);

          //KP ob die Karte aus dem Array entfernt wurde
          console.log('Player Card nach dem Ablegen einer Karte', ownplayercards);

          //Computer ist am Zug
          opponentsTurn();
        }
        showallcards();

        //KP ob die Anweisungen erfüllt wurden
        console.log('Diese Karten wurden abgelegt: ', openstackcards);
      }
      )
    }

    if (opponentcards.length == 0) {
      alert('Computer won, you lose!');
  
    } else
      if (ownplayercards.length == 0) {
        alert('You won, Computer lose!');
      }
  }

  //Funktion zum Vergleich ob Farbe ODER Wert mit der offenen Karte übereinstimmen
  function querycardtrue(nameofcard: string): boolean {

    //Offene Karte und Spielerkarte werden getrennt in Farbe und Wert
    let openedcardsplit: string[] = openstackcards[openstackcards.length - 1].split('-')
    let givencardsplit: string[] = nameofcard.split('-')

    //Farbe und Wert werden miteinander vergleichen
    let colortrue = openedcardsplit[0] == givencardsplit[0]
    let valuetrue = openedcardsplit[1] == givencardsplit[1]

    //Wenn eine Bedingung erfüllt ist, wird die Karte zurück an die if-Bedingung geschickt,
    //welche es zulässt die Karte abzulegen
    let cardtrue = colortrue || valuetrue
    return cardtrue
  }


});

