const container = document.querySelector("#container")

for (i = 0; i< 16; i++){
    const div = document.createElement("div");
    div.classList.add = "div";
    div.textContent = `${i}`;
    container.appendChild(div);
    
    for (b = 0; b< 16; b ++){
        const divc = document.createElement("div");
        divc.classList.add = "divc"
        divc.textContent = `${b}`
        div.appendChild(divc);

    }
}