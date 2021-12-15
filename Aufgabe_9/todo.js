window.addEventListener("load", function () {
    var text = document.querySelector(".input");
    var index = 0;
    text.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            newtask();
            deletetext();
            totals();
        }
    });
    document.getElementById("#add").addEventListener("click", function newtask() { });
    function deletetext() {
        text.value = "";
    }
    function totals() {
        document.querySelector("span").innerHTML = String(index);
    }
    function newtask() {
        //Erhöht die Anzahl um 1
        index++;
        totals();
        //Erstellt eine neue Aufgabe in der HTML
        var newdiv = document.createElement("div");
        var checkbox = document.createElement("input");
        var input = document.createElement("input");
        var label = document.createElement("label");
        var minusbtn = document.createElement("i");
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
        function minustask() {
            newdiv.removeChild(newdiv);
            index--;
            totals();
        }
    }
});
//# sourceMappingURL=todo.js.map