/*Browser lädt erst die Seite bevor er Funktionen ausgibt*/
window.addEventListener("load", function() {
    /*Implemetierung der Sounds*/
    var kick:HTMLAudioElement = new Audio("assets/kick.mp3");
    var hihat:HTMLAudioElement = new Audio("assets/hihat.mp3");
    var snare:HTMLAudioElement = new Audio("assets/snare.mp3");
    var TonA:HTMLAudioElement = new Audio("assets/A.mp3");
    var TonC:HTMLAudioElement = new Audio("assets/C.mp3");
    var TonF:HTMLAudioElement = new Audio("assets/F.mp3");
    var TonG:HTMLAudioElement = new Audio("assets/G.mp3");
    var laugh1:HTMLAudioElement = new Audio("assets/laugh-1.mp3");
    var laugh2:HTMLAudioElement = new Audio("assets/laugh-2.mp3");
    var simplebeat:HTMLAudioElement [] = [kick, hihat, snare]

/*Funktion für die einzelnen Sounds*/
    function playSample(sample:HTMLAudioElement): void { 
    sample.play();
}

/*Funktion für den Beat, wird nur beim ersten Laden der Seite 1x komplett wiedergegeben (dafür setTimeout statt setIntervall)*/
    function playsimplebeat(): void {
    setTimeout(function() {
        simplebeat[0].play();
    },         500,);

    setTimeout(function() {
        simplebeat[1].play();
    },         1000);

    setTimeout(function() {
        simplebeat[2].play();
    },         1500);
}

/*Zuweisung der einzelnen Sounds und des Beats auf die jeweiligen Knöpfe*/
    document.querySelector("#kick").addEventListener("click", function() {playSample(kick)});
    document.querySelector("#hihat").addEventListener("click", function() {playSample(hihat)});
    document.querySelector("#snare").addEventListener("click", function() {playSample(snare)});
    document.querySelector("#A").addEventListener("click", function() {playSample(TonA)});
    document.querySelector("#C").addEventListener("click", function() {playSample(TonC)});
    document.querySelector("#F").addEventListener("click", function() {playSample(TonF)});
    document.querySelector("#G").addEventListener("click", function() {playSample(TonG)});
    document.querySelector("#laugh1").addEventListener("click", function() {playSample(laugh1)});
    document.querySelector("#laugh2").addEventListener("click", function() {playSample(laugh2)});
    document.querySelector(".play").addEventListener("click", playsimplebeat);

});