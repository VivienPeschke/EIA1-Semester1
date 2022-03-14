window.addEventListener("load", function () {
    //Implementierung der Karten, unterteilt in Farbe und Wert
    var colors = ['cyan', 'forest', 'pink', 'purp'];
    var values = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];
    //freies Array um die implementierten Karten dort zu speichern (Deck/ Ziehstapel)
    var allcards = [];
    //Karten werden dem Array hinzugefügt (Deck/ Ziehstapel)
    for (var i_1 = 0; i_1 < colors.length; i_1++) {
        for (var j = 0; j < values.length; j++) {
            allcards.push(colors[i_1] + '-' + values[j]);
        }
    }
    //Zeigt an ob sich die Karten, abgesehen von den ausgeteilten Karten, im Array befinden (Deck/ Ziehstapel)
    console.log('allcards am Anfang', allcards);
    //mischt die Karten
    allcards = shuffle(allcards);
    //Funktion zum mischen der Karten
    function shuffle(array) {
        var _a;
        var currentIndex = array.length, randomIndex;
        while (currentIndex != 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            _a = [
                array[randomIndex], array[currentIndex]
            ], array[currentIndex] = _a[0], array[randomIndex] = _a[1];
        }
        return array;
    }
    //Arrays für die eigenen Spielkarten und den Gegner, in diesem Falle den einfachen Computer
    var ownplayercards = [];
    var opponentcards = [];
    //Aus dem Array mit allen gemischten Karten werden die letzten 10 Karten auf Spieler und Computer aufgeteilt und
    //gleichzeitig aus dem Array mit allen Karten entfernt, damit wir keine doppelten Karten bekommen
    for (var i_2 = 0; i_2 < 5; i_2++) {
        var letztekarte = allcards.pop();
        ownplayercards.push(letztekarte);
        opponentcards.push(letztekarte);
    }
    //Nachdem 10 Karten aus dem Array mit allen Karten entfernt wurden, wird nun die letzte Karte vom gemischten Deck offen gelegt,
    //sodass der Spieler mit dem Spiel beginnen kann
    var openedcard = allcards.pop();
    //Konsole gibt aus, ob und welche Karten verteilt wurden
    console.log('allcards', allcards);
    console.log('ownplayercards', ownplayercards);
    console.log('opponentcards', opponentcards);
    console.log('openedcard', openedcard);
    //DOM Manipulation um auf die jeweiligen ID's und Klassen zuzugreifen um diese zu beeinflussen
    var opponent = document.querySelector('#opponent');
    var opencard = document.querySelector('#open');
    var deck = document.querySelector('.deck');
    var ownplayer = document.querySelector('#ownplayer');
    //Funktion um die Karten in den DOM zu implementieren um Sie in der jeweiligen ID anzeigen zu lassen
    function showallcards() {
        //Offene Karte vom Ablagestapel in der HTML anzeigen
        opencard.innerHTML = '';
        var offeneKarteBild = generatecardspng(openedcard);
        opencard.appendChild(offeneKarteBild);
        //Deck in der HTML anzeigen lassen, in diesem Falle nur die Rückseite der Karte
        deck.innerHTML = '';
        var stapelKarte = generatecardspng('cardback');
        deck.appendChild(stapelKarte);
        //Spielerkarten in der HTML anzeigen lassen
        ownplayer.innerHTML = '';
        var _loop_1 = function (i_3) {
            var ownplayercard = generatecardspng(ownplayercards[i_3]);
            ownplayercard.className = 'karte';
            ownplayer.appendChild(ownplayercard);
            //Zum prüfen ob die Karte geklickt wurde, Ausgabe in der Konsole zur Kontrolle
            ownplayercard.addEventListener('click', function () {
                console.log(ownplayercards[i_3] + ' wurde geklickt');
                //Konsole gibt aus, ob die angeklickte Karte zur offenen Karte auf dem Ablagestapel passt oder nicht
                var cardtrue = querycardplayer(ownplayercards[i_3]);
                console.log('Karte passt zu offener Karte: ' + cardtrue);
                //Wert oder Farbe passen zur offenen Karte auf dem Ablagestapel und kann somit abgelegt werden
                if (cardtrue === true) {
                    openedcard = ownplayercards[i_3];
                    console.log('offene Karte', openedcard);
                    //passende Karte wird aus dem Array 'ownplayercards' entfernt
                    ownplayercards.splice(i_3, 1);
                    console.log('spielerkarten', ownplayercards);
                    showallcards();
                }
            });
        };
        for (var i_3 = 0; i_3 < ownplayercards.length; i_3++) {
            _loop_1(i_3);
        }
        //Computer Karten werden als Rückseite in HTML angezeigt
        opponent.innerHTML = '';
        for (var i_4 = 0; i_4 < opponentcards.length; i_4++) {
            var opponentcard = generatecardspng('cardback');
            opponent.className = 'karte';
            opponent.appendChild(opponentcard);
        }
    }
    //Funktion zum anzeigen aller Karten auf der Seite
    showallcards();
    //Funktion zum prüfen ob die Karte zur offenen Karte auf dem Ablagestapel passt (Wert oder Farbe)
    function querycardplayer(nameofcard) {
        //Offene Karte und Spielerkarte werden getrennt in Farbe und Wert
        var openedcardsplit = openedcard.split('-');
        var givencardsplit = nameofcard.split('-');
        var colortrue = openedcardsplit[0] === givencardsplit[0];
        var valuetrue = openedcardsplit[1] === givencardsplit[1];
        //Wenn eine Bedingung erfüllt ist, wird die Karte zurück an die if Bedingung geschickt, welche es zulässt die Karte abzulegen
        var cardtrue = colortrue || valuetrue;
        return cardtrue;
    }
    //PNG-Image der Karten anzeigen lassen
    function generatecardspng(nameofcards) {
        var newcard = new Image();
        newcard.className = 'karte';
        newcard.src = "Uno_Karten(2)/" + nameofcards + ".png";
        return newcard;
    }
});
//# sourceMappingURL=unogame.js.map