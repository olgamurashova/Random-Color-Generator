const container = document.querySelector(".container");

for (let index = 0; index < 20; index++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
    
}

function randomColor(){
    const charSet = "0123456789abcdef";
    const colorCodeLength = 6;
    let colorCode = "";
    for (let index = 0; index < colorCodeLength; index++) {
        const randomNum = Math.floor(Math.random() * charSet.length);
        //console.log(randomNum);
        colorCode +=charSet.substring(randomNum, randomNum + 1);
        // console.log(colorCode,  randomNum);
        
    }
    return colorCode;
}

randomColor()

const colorContainerAll = document.querySelectorAll(".color-container");
//console.log(colorContainerAll);

function generateColors(){
    colorContainerAll.forEach((colorContainerEl)=>{
        const newColorCode = randomColor();
        //console.log(newColorCode);
        colorContainerEl.style.backgroundColor = "#" + newColorCode;
        colorContainerEl.innerText = "#" + newColorCode;

    })
}

generateColors();