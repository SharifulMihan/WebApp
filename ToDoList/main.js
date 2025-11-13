const inputBox = document.querySelector("#input-task")
const listContainer = document.querySelector("#task-container")


function addTask(){
    if (inputBox.value == ""){
        alert("Please enter your task first")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let xBtn = document.createElement("span")
        xBtn.innerHTML = "\u00d7";
        li.appendChild(xBtn)
        saveData()
    }
    inputBox.value = ""
}


function xTask(){
    listContainer.addEventListener("click", x => {
        if (x.target.tagName === "SPAN"){
            x.target.parentElement.remove();
            saveData()
        }
        else if (x.target.tagName === "LI") {
            x.target.classList.toggle("checked");
            saveData()
        }
    },false);

}
xTask();
renderData();



