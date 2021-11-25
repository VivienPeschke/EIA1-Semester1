namespace A06{
    /*Europa in Zahlen*/
    var europe2008: number =  4965.7;
    var europe2018: number = 4209.3;
    /*Nordamerika in Zahlen*/
    var northamerica2008: number =  6600.4;
    var northamerica2018: number =  6035.6;
    /*Südamerika in Zahlen*/
    var southamerica2008: number =  1132.6;
    var southamerica2018: number =  1261.5;
    /*Afrika in Zahlen*/
    var africa2008: number =  1028;
    var africa2018: number =  1235.5;
    /*Asien in Zahlen*/
    var asia2008: number =  12954.7;
    var asia2018: number =  16274.1;
    /*Australien in Zahlen*/
    var australia2008: number =  1993;
    var australia2018: number =  2100.5;
    /*Kontinente*/
    var af: string = "Afrika"
    var sa: string = "Südamerika"
    var eu: string = "Europa"
    var na: string = "Nordamerika"
    var as: string = "Asien"
    var aus: string = "Australien"
    /* Weltberechnung */
    var welt = africa2018 + southamerica2018 + europe2018 + northamerica2018 + asia2018 + australia2018;
/*Funktion zur Berechnung*/
function emission(continent, wert2018, wert2008) {
    document.querySelector(".continent").innerHTML = continent;
    document.querySelector(".continent1").innerHTML = continent;
    document.querySelector(".absolute").innerHTML = wert2018.toString();
    document.querySelector(".relative").innerHTML = (100/ welt * wert2018).toFixed(2);
    document.querySelector(".growth").innerHTML = (100 / welt * wert2018 - 100).toFixed(2);
    document.querySelector(".growthabsolute").innerHTML = (wert2018 - wert2008).toFixed(2);
}
/*Funktion zur Anzeige*/
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", function () { emission(eu, europe2018, europe2008); });
    document.querySelector(".northamerica").addEventListener("click", function () { emission(na, northamerica2018, northamerica2008); });
    document.querySelector(".southamerica").addEventListener("click", function () { emission(sa, southamerica2018, southamerica2008); });
    document.querySelector(".africa").addEventListener("click", function () { emission(af, africa2018, africa2008); });
    document.querySelector(".asia").addEventListener("click", function () { emission(as, asia2018, asia2008); });
    document.querySelector(".australia").addEventListener("click", function () { emission(aus, australia2018, australia2008); });
});
}