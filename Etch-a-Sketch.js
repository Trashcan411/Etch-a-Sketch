
/*btn.addEventListener("click", function (e) {
  e.target.style.background = "red";
  });*/
const container = document.querySelector("#container")
container.classList.add("container");

const buttonPrompt = document.querySelector("button")
buttonPrompt.textContent = `make a new grid`;
buttonPrompt.addEventListener("click", function(e){
    if (container.hasChildNodes()){
        let children = container.childNodes;

        while (container.firstChild){
            container.removeChild(container.firstChild)
        }
    }
    let a = parseInt(prompt("grid number?"))

    while (a > 101){
        a = parseInt(prompt("grid number?"))
    }
    
    for (i = 0; i< a; i++){
        const div = document.createElement("div");
        div.classList.add("div");
        div.style.display = "flex; flex-direction:row;"
        container.appendChild(div);
        for (b = 0; b< a; b ++){
            const divc = document.createElement("div");
            divc.classList.add("divc");
            divc.addEventListener("mouseover", mouseOver);
            divc.addEventListener("mouseout", mouseOut);
            function mouseOver() {
                divc.style.backgroundColor = "black";
              }
              
              function mouseOut() {
                divc.style.backgroundColor = "white";
              }
            div.appendChild(divc);
            }

}
}
)



