function crearFiltro(){
    var nombre = "Erick";
    let li = document.createElement("li");
    li.setAttribute("data-filter",".filter-" + nombre);
    var text = document.createTextNode("Erick");
    li.appendChild(text);
    document.querySelector("#portfolio-flters").appendChild(li);
}