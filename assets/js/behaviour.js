function crearFiltro(){
    var input = document.querySelector("#txtFiltro").textContent;
    
    let li = document.createElement("li");
    li.setAttribute("data-filter",".filter-" + input);
    var text = document.createTextNode(input);
    li.appendChild(text);
    document.querySelector("#portfolio-flters").appendChild(li);
}