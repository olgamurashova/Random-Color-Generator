const container = document.querySelector(".container");

for (let index = 0; index < 20; index++) {
    const colorContainer = document.createElement("div");
    colorContainer.classList.add("color-container");
    container.appendChild(colorContainer);
    
}