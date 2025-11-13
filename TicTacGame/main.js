

let matrix = [
    0,0,0,
    0,0,0,
    0,0,0
]

let value = 1;
function checkWinner()
{
    let result = [matrix[0] + matrix[1] + matrix[2],matrix[3] + matrix[4] + matrix[5],matrix[6] + matrix[7] + matrix[8],
                matrix[0] + matrix[3] + matrix[6],matrix[1] + matrix[4] + matrix[7],matrix[2] + matrix[5] + matrix[8],
                matrix[0] + matrix[4] + matrix[8],matrix[2] + matrix[4] + matrix[6]]
    if (result.includes(3)){
        console.log("Win OOOOOOOOO");
        document.querySelector("p").textContent = "Winner is O"
        
    }
    else if (result.includes(-3)){
        console.log("Win XXXXXXXXX");
        document.querySelector("p").textContent = "Winner is X"
        
    }

}





//  Frontend
let bar = "url('O.png')";

let boox = document.querySelectorAll('.box')
boox.forEach(box => {
  box.onclick = () => {
    
    
    matrix[Number(box.id)] = value;
    checkWinner();
    console.log(matrix);
    box.style.backgroundImage = bar;
    if (bar == "url('O.png')"){
        value = -1;
        bar = "url('X.png')";
    }
    else{
        value = 1;
        bar = "url('O.png')";
    }
    
  }
});
let Button = document.querySelector("button");
Button.onclick = () => {
    boox.forEach(box => {
        box.style.backgroundImage = null
    })
    value = 1
    bar = "url('O.png')";
    document.querySelector("p").textContent = ""
    matrix = [
                0,0,0,
                0,0,0,
                0,0,0
            ]
}
    

