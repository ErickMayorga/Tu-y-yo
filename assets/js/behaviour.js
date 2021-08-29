function crearFiltro(){
    var input = document.querySelector("#txtFiltro");
    
    let li = document.createElement("li");
    li.setAttribute("data-filter",".filter-" + input.textContent);
    var text = document.createTextNode(input.textContent);
    li.appendChild(text);
    document.querySelector("#portfolio-flters").appendChild(li);
}