window.addEventListener("load", function(): void {

    var SOUND: string[] = ["./assets/kick.mp3", "./assets/snare.mp3", "./assets/hihat.mp3",
                            "./assets/A.mp3", "./assets/C.mp3", "./assets/F.mp3",
                            "./assets/G.mp3", "./assets/laugh-1.mp3", "./assets/laugh-2.mp3"];
    var beatone: string[] = [SOUND [0], SOUND [1] , SOUND [2]];
    var playing: boolean = false;
    var recording: boolean = false;

    //Funktion für das Drum Pad
    function play(sample: string): void {
        var sound: HTMLAudioElement = new Audio(sample);
        sound.play();
        if (recording) {
            beatone.push(sample);
        } 
    }

    //Beat mit Kick, HiHat und Snare
    function shuffle(): void {
        clearBeat();
        for (let i: number = 0; i < 6; i++) {
            beatone.push(SOUND[Math.floor((Math.random() * 3))]);
        }
    }

    //Löscht Beat
    function clearBeat(): void {
        beatone = [];
    }


    var btn: HTMLElement = document.querySelector("#playbtn");

    //Beat aus Array spielt im Loop
    function playSample(): void {
        playing = true;
        var index: number = 0;
        // tslint:disable-next-line: no-any
        var loop: any = setInterval(playPreset, 300);
        function playPreset(): void {
            if (!playing) {
                clearInterval(loop);
            } else if (index >= beatone.length) {
                index = 0;
                play(beatone[index]);
            } else {
                play(beatone[index]);
            }
            index++;
        }

        if (btn.getAttribute("class"), "fas fa-play") {
            btn.setAttribute("class", "fas fa-stop");
        }   
    }

    //Stoppt Beat
    function stopBeat(): void {
        playing = false;
        if (btn.getAttribute("class"), "fas fa-stop") {
            btn.setAttribute("class", "fas fa-play");
        }   
    }

    //Startet Aufnahme im geleerten Array
    function startRecording(): void {
        stopBeat();
        clearBeat();
        recording = true;
    }

    //Stoppt die Aufnahme
    function stopRecording(): void {
        recording = false;
    }

    //Zuweisung der Töne zu den jeweiligen Knöpfen
    document.querySelector("#kick").addEventListener("click", function(): void {play (SOUND [0]); });
    document.querySelector("#hihat").addEventListener("click", function(): void {play (SOUND [1]); });
    document.querySelector("#snare").addEventListener("click", function(): void {play (SOUND [2]); });
    document.querySelector("#A").addEventListener("click", function(): void {play (SOUND [3]); });
    document.querySelector("#C").addEventListener("click", function(): void {play (SOUND [4]); });
    document.querySelector("#F").addEventListener("click", function(): void {play (SOUND [5]); });
    document.querySelector("#G").addEventListener("click", function(): void {play (SOUND [6]); });
    document.querySelector("#laugh1").addEventListener("click", function(): void {play (SOUND [7]); });
    document.querySelector("#laugh2").addEventListener("click", function(): void {play (SOUND[8]); });

    document.querySelector("#playbtn").addEventListener("click", function(): void {if (!playing) {playSample(); } else {stopBeat(); }});
    document.querySelector("#recbtn").addEventListener("click", function(): void {if (!recording) {startRecording(); } else {stopRecording(); }});
    document.querySelector("#randombtn").addEventListener("click", shuffle);
    document.querySelector("#trashbtn").addEventListener("click", clearBeat);
});