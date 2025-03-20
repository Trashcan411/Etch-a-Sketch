
/*btn.addEventListener("click", function (e) {
  e.target.style.background = "red";
  });*/

const buttonPrompt = document.querySelector("button")
buttonPrompt.textContent = `make a new grid`;
buttonPrompt.addEventListener("click", function(e){
    let a = prompt("grid number?")
    return a
})

const container = document.querySelector("#container")
container.classList.add("container");

for (i = 0; i< buttonPrompt; i++){
    const div = document.createElement("div");
    div.classList.add("div");
    div.style.display = "flex; flex-direction:row;"
    container.appendChild(div);
    
    for (b = 0; b< 16; b ++){
        const divc = document.createElement("div");
        divc.classList.add("divc");
        divc.textContent = `${b}`;
        div.addEventListener("mouseover", function(e){
            e.target.style.background= "black"
        })
        div.appendChild(divc);

    }
}