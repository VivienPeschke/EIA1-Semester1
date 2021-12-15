window.addEventListener("load", function(): void {
    const text: HTMLInputElement = document.querySelector(".input");
    let index: number = 0;

    text.addEventListener("keydown" , function (event): void {
        if(event.key === "Enter") {
            newtask();
            deletetext();
            totals();
        }
    });

    document.getElementById("#add").addEventListener("click", function newtask(){});

    function deletetext(): void {
        text.value = "";
    }
            
    function totals(): void {
        document.querySelector("span").innerHTML = String(index);
    }

    function newtask (): void {

        //Erhöht die Anzahl um 1
        index++;
        totals();

        //Erstellt eine neue Aufgabe in der HTML
        let newdiv: HTMLDivElement = document.createElement("div");
        let checkbox = document.createElement("input");
        let input = document.createElement("input");
        let label: HTMLElement = document.createElement("label");
        var minusbtn: HTMLElement = document.createElement("i");
        newdiv.id = "addnewtask";
        checkbox.type = "checkbox";
        checkbox.className = "checkbox";
        input.type = "input";
        input.className = "input";
        label.innerHTML = text.value;
        minusbtn.className = "fas fa-minus";

        newdiv.appendChild(checkbox);
        newdiv.appendChild(label);
        newdiv.appendChild(minusbtn);
        newdiv.appendChild(input);

            function minustask (): void {
                newdiv.removeChild(newdiv);
                index--;
                totals();
            }
        

    } 
});