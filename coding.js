
var newList = document.getElementById("new-item");
var add = document.getElementById("add-btn");
var list = document.getElementById("my-list");
var deleteAll = document.getElementById("delete-all-btn");

function addList() {
    var txt = document.createTextNode(newList.value);
    var myLiElem = document.createElement("li");
    myLiElem.appendChild(txt);
    list.appendChild(myLiElem);
    addCloseBtn(myLiElem);
    addCompleteBtn(myLiElem);
    newList.value = "";
    newList.focus();
}

function addCloseBtn(liElement) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    span.className = "close";
    span.onclick = function () {
        var liItem = this.parentElement;
        liItem.parentElement.removeChild(liItem);
    }
    liElement.appendChild(span);
}

function addCompleteBtn(liElement) {
    var span = document.createElement("span");
    var inp = document.createElement("input");
    inp.type = "checkbox";
    span.appendChild(inp);
    span.className = "checkBox";
    span.onclick = function () {
        if (this.firstChild.checked)
            this.parentElement.className = "completed";
        else
            this.parentElement.classList.remove("completed");
    }
    liElement.appendChild(span);
}


function deleteLists() {
    var liItems = list.childNodes;
    console.log(liItems);
    var len = liItems.length;
    var i;
    for (i = 0; i < len; i++) {
        list.removeChild(liItems[0]);
    }
}
