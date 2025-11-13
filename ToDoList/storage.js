const listContaine = document.querySelector("#task-container")


function saveData(){
    localStorage.setItem("data",listContaine.innerHTML);
}
function renderData(){
    listContaine.innerHTML = localStorage.getItem("data");
}
