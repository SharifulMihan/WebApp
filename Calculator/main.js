function calculation(){
    const display = document.querySelector("#display");
    const result =  eval(display.value)
    if (display.value !== "") {
        display.value = result;
    }
    
}


document.querySelector(".calculator").addEventListener("click",x => {
    const display = document.querySelector("#display");
    if (["1","2","3","4","5","6","7","8","9","0","00","*","/","+",".","-"].includes(x.target.value)) {
        display.value += `${x.target.value}`;
    }
    
})