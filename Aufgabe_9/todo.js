window.addEventListener("load", function () {
    var toDoInput = document.querySelector("#toDoInput");
    var list = document.querySelector("#toDos");
    var add = document.querySelector("#addButton");
    var allToDos = [];
    toDoInput.addEventListener("keydown", function (event) {
        if (event.keyCode == 13) {
            newToDo();
        }
    });
    add.addEventListener("click", function () { newToDo(); });
    function newToDo() {
        allToDos.push({ checked: false, content: toDoInput.value, toDoId: "", checkmarkId: "", trashId: "" });
        displayList();
    }
    function displayList() {
        list.innerHTML = "";
        var _loop_1 = function (i_1) {
            var todo = allToDos[i_1];
            todo.toDoId = i_1.toString();
            todo.checkmarkId = "check" + i_1.toString();
            todo.trashId = "trash" + i_1.toString();
            var newToDo_1 = document.createElement("li");
            var node = document.createTextNode(todo.content);
            var idToDo = document.createAttribute("id");
            var idChecked = document.createAttribute("id");
            var idTrash = document.createAttribute("id");
            idToDo.value = todo.toDoId;
            idChecked.value = todo.checkmarkId;
            idTrash.value = todo.trashId;
            var checkbox = document.createElement("i");
            var checked = document.createAttribute("class");
            var trashIcon = document.createElement("i");
            var trash = document.createAttribute("class");
            trash.value = "far fa-trash-alt";
            trashIcon.setAttributeNode(trash);
            if (allToDos[i_1].checked == false) {
                checked.value = "far fa-circle";
                checkbox.setAttributeNode(checked);
            }
            else {
                checked.value = "fas fa-check-circle";
                checkbox.setAttributeNode(checked);
            }
            checkbox.setAttributeNode(idChecked);
            newToDo_1.appendChild(checkbox);
            newToDo_1.appendChild(node);
            newToDo_1.setAttributeNode(idToDo);
            newToDo_1.appendChild(trashIcon);
            list.appendChild(newToDo_1);
            checkbox.addEventListener("click", function () { checkToDo(idChecked.value); });
            trashIcon.addEventListener("click", function () { deleteToDo(idTrash.value); });
        };
        for (var i_1 = 0; i_1 < allToDos.length; i_1++) {
            _loop_1(i_1);
        }
        if (allToDos.length != 1) {
            document.querySelector("#numberOfToDos").innerHTML = (allToDos.length).toString() + " tasks";
        }
        else {
            document.querySelector("#numberOfToDos").innerHTML = (allToDos.length).toString() + " task";
        }
        toDoInput.value = "";
    }
    function checkToDo(id) {
        for (var i_2 = 0; i_2 < allToDos.length; i_2++) {
            var todo = allToDos[i_2];
            if (todo.checkmarkId == id) {
                var check = document.querySelector("#" + id);
                if (todo.checked == false) {
                    check.setAttribute("class", "fas fa-check-circle");
                    todo.checked = true;
                }
                else {
                    check.setAttribute("class", "far fa-circle");
                    todo.checked = false;
                }
            }
        }
    }
    function deleteToDo(id) {
        for (var i_3 = 0; i_3 < allToDos.length; i_3++) {
            var todo = allToDos[i_3];
            if (todo.trashId == id) {
                allToDos.splice(i_3, 1);
            }
        }
        displayList();
    }
});
//# sourceMappingURL=todo.js.map