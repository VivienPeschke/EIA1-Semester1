/*Europa in Zahlen*/
var europe2008 = 4965.7;
var europe2018 = 4209.3;
/*Nordamerika in Zahlen*/
var northamerica2008 = 6600.4;
var northamerica2018 = 6035.6;
/*Südamerika in Zahlen*/
var southamerica2008 = 1132.6;
var southamerica2018 = 1261.5;
/*Afrika in Zahlen*/
var africa2008 = 1028;
var africa2018 = 1235.5;
/*Asien in Zahlen*/
var asia2008 = 12954.7;
var asia2018 = 16274.1;
/*Australien in Zahlen*/
var australia2008 = 1993;
var australia2018 = 2100.5;
/*Kontinente*/
var africa = "Afrika";
var southamerica = "Südamerika";
var europe = "Europa";
var northamerica = "Nordamerika";
var asia = "Asien";
var australia = "Australien";
/* Weltberechnung */
var welt = africa2018 + southamerica2018 + europe2018 + northamerica2018 + asia2018 + australia2018;
/*Europa*/
console.log("Die Emission von " + europe + " ist " + europe2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + europe + " damit " + Math.round((europe2018 / welt) * 100) + "%");
console.log("Für " + europe + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((europe2018 - europe2008) / europe2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((europe2018 - europe2008)) + " kg CO2");
/*Nordamerika*/
console.log("Die Emission von " + northamerica + " ist " + northamerica2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + northamerica + " damit " + Math.round((northamerica2018 / welt) * 100) + "%");
console.log("Für " + northamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((northamerica2018 - northamerica2008) / northamerica2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((northamerica2018 - northamerica2008)) + " kg CO2");
/*Südamerika*/
console.log("Die Emission von " + southamerica + " ist " + southamerica2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + southamerica + " damit " + Math.round((southamerica2018 / welt) * 100) + "%");
console.log("Für " + southamerica + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((southamerica2018 - southamerica2008) / southamerica2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((southamerica2018 - southamerica2008)) + " kg CO2");
/*Afrika*/
console.log("Die Emission von " + africa + " ist " + africa2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + africa + " damit " + Math.round((africa2018 / welt) * 100) + "%");
console.log("Für " + africa + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((africa2018 - africa2008) / africa2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((africa2018 - africa2008)) + " kg CO2");
/*Asien*/
console.log("Die Emission von " + asia + " ist " + asia2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + asia + " damit " + Math.round((asia2018 / welt) * 100) + "%");
console.log("Für " + asia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((asia2018 - asia2008) / asia2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((asia2018 - asia2008)) + " kg CO2");
/*Australien*/
console.log("Die Emission von " + australia + " ist " + southamerica2018 + " kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht " + australia + " damit " + Math.round((australia2018 / welt) * 100) + "%");
console.log("Für " + australia + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Math.round((australia2018 - australia2008) / australia2008 * 100) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + Math.round((australia2018 - australia2008)) + " kg CO2");
//# sourceMappingURL=script.js.map