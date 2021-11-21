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
/* Berechnung Europa*/
var euwelt = (100/ welt * europe2018).toFixed(2);
var eu0818 = (100 / welt * europe2018 - 100).toFixed(2);
var eu18zu08 = (europe2018 - europe2008).toFixed(2);
/*Berechnung Nordamerika*/
var nawelt = (100/ welt * northamerica2018).toFixed(2);
var na0818 = (100 / welt * northamerica2018 - 100).toFixed(2);
var na18zu08 = (northamerica2018 - northamerica2008).toFixed(2);
/*Berechnung Südamerika*/
var sawelt = (100/ welt * southamerica2018).toFixed(2);
var sa0818 = (100 / welt * southamerica2018 - 100).toFixed(2);
var sa18zu08 = (southamerica2018 - southamerica2008).toFixed(2);
/*Berechnung Afrika*/
var afwelt = (100/ welt * africa2018).toFixed(2);
var af0818 = (100 / welt * africa2018 - 100).toFixed(2);
var af18zu08 = (africa2018 - africa2008).toFixed(2);
/*Berechnung Asien*/
var aswelt = (100/ welt * asia2018).toFixed(2);
var as0818 = (100 / welt * asia2018 - 100).toFixed(2);
var as18zu08 = (asia2018 - asia2008).toFixed(2);
/*Berechnung Australien*/
var auswelt = (100/ welt * australia2018).toFixed(2);
var aus0818 = (100 / welt * australia2018 - 100).toFixed(2);
var aus18zu08 = (australia2018 - australia2008).toFixed(2);
/*Funktionen zu Berechnung*/
/*Europa*/
window.addEventListener("load", function(){
    document.querySelector(".europe").addEventListener("click", function(){
        document.querySelector(".continent").innerHTML = eu;
        document.querySelector(".continent1").innerHTML = eu;
        document.querySelector(".absolute").innerHTML = String(europe2018);
        document.querySelector(".relative").innerHTML = euwelt + "%";
        document.querySelector(".growth").innerHTML = eu0818 + "%";
        document.querySelector(".growthabsolute").innerHTML = String(eu18zu08);
        /*Chart Anzeige*/
        document.querySelector("#chart").style.height.innerHTML = String(euwelt);
    });
});
/*Nordamerika*/
window.addEventListener("load", function(){
    document.querySelector(".northamerica").addEventListener("click", function(){
        document.querySelector(".continent").innerHTML = na;
        document.querySelector(".continent1").innerHTML = na;
        document.querySelector(".absolute").innerHTML = String(northamerica2018);
        document.querySelector(".relative").innerHTML = nawelt + "%";
        document.querySelector(".growth").innerHTML = na0818 + "%";
        document.querySelector(".growthabsolute").innerHTML = String(na18zu08);
    });
});
/*Südamerika*/
window.addEventListener("load", function(){
    document.querySelector(".southamerica").addEventListener("click", function(){
        document.querySelector(".continent").innerHTML = sa;
        document.querySelector(".continent1").innerHTML = sa;
        document.querySelector(".absolute").innerHTML = String(southamerica2018);
        document.querySelector(".relative").innerHTML = sawelt + "%";
        document.querySelector(".growth").innerHTML = sa0818 + "%";
        document.querySelector(".growthabsolute").innerHTML = String(sa18zu08);
    });
});
/*Afrika*/
window.addEventListener("load", function(){
    document.querySelector(".africa").addEventListener("click", function(){
        document.querySelector(".continent").innerHTML = af;
        document.querySelector(".continent1").innerHTML = af;
        document.querySelector(".absolute").innerHTML = String(africa2018);
        document.querySelector(".relative").innerHTML = afwelt + "%";
        document.querySelector(".growth").innerHTML = af0818 + "%";
        document.querySelector(".growthabsolute").innerHTML = String(af18zu08);
    });
});
/*Asien*/
window.addEventListener("load", function(){
    document.querySelector(".asia").addEventListener("click", function(){
        document.querySelector(".continent").innerHTML = as;
        document.querySelector(".continent1").innerHTML = as;
        document.querySelector(".absolute").innerHTML = String(asia2018);
        document.querySelector(".relative").innerHTML = aswelt + "%";
        document.querySelector(".growth").innerHTML = as0818 + "%";
        document.querySelector(".growthabsolute").innerHTML = String(as18zu08);
    });
});
/*Australien*/
window.addEventListener("load", function(){
    document.querySelector(".australia").addEventListener("click", function(){
        document.querySelector(".continent").innerHTML = aus;
        document.querySelector(".continent1").innerHTML = aus;
        document.querySelector(".absolute").innerHTML = String(australia2018);
        document.querySelector(".relative").innerHTML = auswelt + "%";
        document.querySelector(".growth").innerHTML = aus0818 + "%";
        document.querySelector(".growthabsolute").innerHTML = String(aus18zu08);
    });
});