window.addEventListener("load", function () {
    var SOUND = ["./assets/kick.mp3", "./assets/snare.mp3", "./assets/hihat.mp3",
        "./assets/A.mp3", "./assets/C.mp3", "./assets/F.mp3",
        "./assets/G.mp3", "./assets/laugh-1.mp3", "./assets/laugh-2.mp3"];
    var beatone = [SOUND[0], SOUND[1], SOUND[2]];
    var playing = false;
    var recording = false;
    //Funktion für das Drum Pad
    function play(sample) {
        var sound = new Audio(sample);
        sound.play();
        if (recording) {
            beatone.push(sample);
        }
    }
    //Beat mit Kick, HiHat und Snare
    function shuffle() {
        clearBeat();
        for (var i_1 = 0; i_1 < 6; i_1++) {
            beatone.push(SOUND[Math.floor((Math.random() * 3))]);
        }
    }
    //Löscht Beat
    function clearBeat() {
        beatone = [];
    }
    var btn = document.querySelector("#playbtn");
    //Beat aus Array spielt im Loop
    function playSample() {
        playing = true;
        var index = 0;
        // tslint:disable-next-line: no-any
        var loop = setInterval(playPreset, 300);
        function playPreset() {
            if (!playing) {
                clearInterval(loop);
            }
            else if (index >= beatone.length) {
                index = 0;
                play(beatone[index]);
            }
            else {
                play(beatone[index]);
            }
            index++;
        }
        if (btn.getAttribute("class"), "fas fa-play") {
            btn.setAttribute("class", "fas fa-stop");
        }
    }
    //Stoppt Beat
    function stopBeat() {
        playing = false;
        if (btn.getAttribute("class"), "fas fa-stop") {
            btn.setAttribute("class", "fas fa-play");
        }
    }
    //Startet Aufnahme im geleerten Array
    function startRecording() {
        stopBeat();
        clearBeat();
        recording = true;
    }
    //Stoppt die Aufnahme
    function stopRecording() {
        recording = false;
    }
    //Zuweisung der Töne zu den jeweiligen Knöpfen
    document.querySelector("#kick").addEventListener("click", function () { play(SOUND[0]); });
    document.querySelector("#hihat").addEventListener("click", function () { play(SOUND[1]); });
    document.querySelector("#snare").addEventListener("click", function () { play(SOUND[2]); });
    document.querySelector("#A").addEventListener("click", function () { play(SOUND[3]); });
    document.querySelector("#C").addEventListener("click", function () { play(SOUND[4]); });
    document.querySelector("#F").addEventListener("click", function () { play(SOUND[5]); });
    document.querySelector("#G").addEventListener("click", function () { play(SOUND[6]); });
    document.querySelector("#laugh1").addEventListener("click", function () { play(SOUND[7]); });
    document.querySelector("#laugh2").addEventListener("click", function () { play(SOUND[8]); });
    document.querySelector("#playbtn").addEventListener("click", function () { if (!playing) {
        playSample();
    }
    else {
        stopBeat();
    } });
    document.querySelector("#recbtn").addEventListener("click", function () { if (!recording) {
        startRecording();
    }
    else {
        stopRecording();
    } });
    document.querySelector("#randombtn").addEventListener("click", shuffle);
    document.querySelector("#trashbtn").addEventListener("click", clearBeat);
});
//# sourceMappingURL=drumscript.js.map